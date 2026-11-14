"use client";

import { useRef, useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { contactContent } from "@/data/contact";
import { site, ui } from "@/data/site";
import { cn } from "@/lib/utils";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "success" | "error" | "not-connected";

const { form, formEndpoint } = contactContent;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Revisa los campos y devuelve los errores (vacío = todo bien) */
function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = form.errors.nameRequired;
  if (!values.email.trim()) errors.email = form.errors.emailRequired;
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = form.errors.emailInvalid;
  if (values.message.trim().length < 10) errors.message = form.errors.messageShort;
  return errors;
}

/**
 * Formulario de contacto con validación.
 * - Lo que escribe la persona solo se envía, nunca se pinta como HTML.
 * - No hay claves en el navegador: el envío lo hace un servicio externo (Formspree) por su URL pública.
 * - Si aún no hay servicio (formEndpoint = null), lo dice en vez de fingir que se envió.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const found = validate(values);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      // lleva el foco al primer campo con error para que se pueda corregir de una
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // trampa para bots: un campo oculto que una persona nunca llena
    if (data.get("company")) return;

    if (!formEndpoint) {
      setStatus("not-connected");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(String(response.status));
      formRef.current?.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = (field: Field) =>
    cn(
      "mt-2 w-full rounded-xl border-3 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink/60",
      errors[field] ? "border-red" : "border-ink",
    );

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-2 flex items-center gap-1.5 text-sm font-bold text-red">
        <Icon name="flag" className="size-4" />
        {errors[field]}
      </p>
    ) : null;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="sticker rounded-sticker bg-paper p-6 text-ink [--focus:var(--color-ink)] sm:p-8">
      <h3 className="text-4xl">{form.title}</h3>

      <div className="mt-6">
        <label htmlFor="name" className="font-bold">
          {form.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass("name")}
        />
        {errorText("name")}
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="font-bold">
          {form.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass("email")}
        />
        {errorText("email")}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="font-bold">
          {form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass("message"), "resize-y")}
        />
        {errorText("message")}
      </div>

      {/* trampa para bots (oculta para personas y lectores de pantalla) */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="sticker-sm mt-7 inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 font-bold text-paper transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60"
      >
        <Icon name="mail" />
        {status === "sending" ? form.sending : form.submit}
      </button>

      <div aria-live="polite" className="mt-5">
        {status === "success" && (
          <p className="flex items-center gap-2 font-bold">
            <Icon name="check" />
            {form.success}
          </p>
        )}
        {(status === "error" || status === "not-connected") && (
          <p className="rounded-xl border-3 border-dashed border-ink p-4 font-semibold">
            {status === "error" ? form.sendError : form.notConnected}{" "}
            <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-3 underline-offset-4">
              LinkedIn
              <span className="sr-only"> {ui.opensNewTab}</span>
            </a>
          </p>
        )}
      </div>
    </form>
  );
}

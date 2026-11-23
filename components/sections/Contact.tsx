import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent as content } from "@/data/contact";
import { site, socialLinks, ui } from "@/data/site";
import { displayUrl } from "@/lib/utils";

/** Contactos: ubicación, correo (si hay), redes con su dirección visible y el formulario */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title" lead={content.lead}>
            {content.title}
          </SectionHeading>

          <ul className="mt-10 space-y-5">
            {site.emails.map((email) => (
              <li key={email} className="flex items-center gap-4">
                <span aria-hidden="true" className="glass grid size-12 shrink-0 place-items-center rounded-xl text-blue-soft">
                  <Icon name="mail" />
                </span>
                <span>
                  <span className="block text-sm text-muted">{content.emailLabel}</span>
                  <a href={`mailto:${email}`} className="font-semibold break-all text-white hover:text-blue-soft">
                    {email}
                  </a>
                </span>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <span aria-hidden="true" className="glass grid size-12 shrink-0 place-items-center rounded-xl text-blue-soft">
                <Icon name="pin" />
              </span>
              <span>
                <span className="block text-sm text-muted">{content.locationLabel}</span>
                <span className="font-semibold text-white">{site.location}</span>
              </span>
            </li>
          </ul>

          <h3 className="mt-12 text-xl">{content.linksTitle}</h3>
          <ul className="mt-5 grid gap-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex h-full items-center gap-3.5 rounded-card p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-soft/40"
                >
                  {link.icon && <Image src={link.icon} alt="" width={28} height={28} unoptimized className="icon-light size-7" />}
                  <span className="flex min-w-0 flex-col">
                    <span className="font-semibold text-white">{link.label}</span>
                    <span className="text-sm break-all text-muted">{displayUrl(link.href)}</span>
                  </span>
                  <span className="sr-only"> {ui.opensNewTab}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

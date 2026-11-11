import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent as content } from "@/data/contact";
import { site, socialLinks, ui } from "@/data/site";
import { cn, displayUrl } from "@/lib/utils";

const tilts = ["-rotate-1", "rotate-1", "-rotate-2"];

/** Contacto (amarillo): redes y correos como stickers + formulario */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-yellow px-5 py-24 text-ink sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="contact-title">{content.title}</SectionHeading>
          <p className="mt-4 text-lg">{content.lead}</p>

          <h3 className="mt-12 text-3xl">{content.linksTitle}</h3>
          <ul className="mt-5 space-y-5">
            {socialLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "sticker flex items-center gap-4 rounded-2xl bg-paper p-4 transition-transform duration-200 hover:-translate-y-1",
                    tilts[index % tilts.length],
                  )}
                >
                  {link.icon && <Image src={link.icon} alt="" width={36} height={36} unoptimized className="size-9" />}
                  <span className="flex min-w-0 flex-col">
                    <span className="text-lg font-bold">{link.label}</span>
                    <span className="text-sm break-all">{displayUrl(link.href)}</span>
                  </span>
                  <span className="sr-only"> {ui.opensNewTab}</span>
                </a>
              </li>
            ))}
            {site.emails.map((email) => (
              <li key={email}>
                <a href={`mailto:${email}`} className="sticker flex items-center gap-4 rounded-2xl bg-paper p-4">
                  <Icon name="mail" className="size-9" />
                  <span className="text-lg font-bold break-all">{email}</span>
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

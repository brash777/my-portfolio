import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { ui } from "@/data/site";
import { accentSurface } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { Hobby } from "@/types";

interface HobbyCardProps {
  hobby: Hobby;
  className?: string;
}

/** Sticker de un hobby: íconos, título, frase corta y la lista de cosas que le gustan */
export function HobbyCard({ hobby, className }: HobbyCardProps) {
  return (
    <article className={cn("sticker flex h-full flex-col rounded-sticker p-6", accentSurface[hobby.accent], className)}>
      <div className="flex gap-2">
        {hobby.icons.map((icon) => (
          <span
            key={icon}
            className="grid size-12 place-items-center rounded-full border-2 border-ink bg-paper text-ink"
          >
            {icon === "spotify" ? (
              <Image src="/images/icons/spotify.svg" alt="" width={22} height={22} unoptimized className="size-5.5" />
            ) : (
              <Icon name={icon} className="size-6" />
            )}
          </span>
        ))}
      </div>
      <h4 className="mt-6 text-4xl leading-none">{hobby.title}</h4>
      <p className="mt-2 text-base">{hobby.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {hobby.items.map((item) => (
          <li key={item} className="rounded-full border-2 border-current px-3 py-1 text-sm font-semibold">
            {item}
          </li>
        ))}
      </ul>
      {hobby.link && (
        <a
          href={hobby.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-paper px-4 py-2 text-sm font-bold text-ink"
        >
          {hobby.link.label}
          <span className="sr-only"> {ui.opensNewTab}</span>
        </a>
      )}
    </article>
  );
}

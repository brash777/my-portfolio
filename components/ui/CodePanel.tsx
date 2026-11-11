import { cn } from "@/lib/utils";
import type { CodeField } from "@/types";

interface CodePanelProps {
  fileName: string;
  variable: string;
  fields: CodeField[];
  className?: string;
}

/** Pinta un valor con el color que le daría un editor: textos en rojo, true/false en azul */
function CodeValue({ value }: { value: CodeField["value"] }) {
  if (typeof value === "boolean") {
    return <span className="text-blue">{String(value)}</span>;
  }
  if (Array.isArray(value)) {
    return (
      <>
        [
        {value.map((item, index) => (
          <span key={item}>
            <span className="text-red">&quot;{item}&quot;</span>
            {index < value.length - 1 && ", "}
          </span>
        ))}
        ]
      </>
    );
  }
  return <span className="text-red">&quot;{value}&quot;</span>;
}

/**
 * Panel con estética de editor de código. No es una imagen: el código
 * se arma desde los datos (data/hero.ts), así que es texto real y accesible.
 */
export function CodePanel({ fileName, variable, fields, className }: CodePanelProps) {
  return (
    <figure className={cn("sticker overflow-hidden rounded-sticker bg-paper text-ink", className)}>
      <figcaption className="flex items-center gap-3 border-b-3 border-ink px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-3 rounded-full border-2 border-ink bg-red" />
          <span className="size-3 rounded-full border-2 border-ink bg-yellow" />
          <span className="size-3 rounded-full border-2 border-ink bg-blue" />
        </span>
        <span className="font-mono text-sm">{fileName}</span>
      </figcaption>
      <pre className="px-4 py-4 font-mono text-[0.8rem] leading-relaxed break-words whitespace-pre-wrap sm:text-sm">
        <code>
          <span className="block">
            <span className="text-blue">const</span> <span className="text-violet">{variable}</span> = {"{"}
          </span>
          {fields.map((field) => (
            <span key={field.key} className="block pl-5">
              <span className="text-violet">{field.key}</span>: <CodeValue value={field.value} />,
            </span>
          ))}
          <span className="block">{"};"}</span>
        </code>
      </pre>
    </figure>
  );
}

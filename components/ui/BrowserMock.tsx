import Image from "next/image";

type Props = {
  name: string;
  bullets: string[];
  /** Domínio mostrado na barra de endereço. Default: derivado do nome. */
  url?: string;
  /** Screenshot real do site. Quando presente, substitui o esqueleto. */
  image?: string;
};

export function BrowserMock({ name, bullets, url, image }: Props) {
  const address = url ?? `${name.toLowerCase().replace(/\s+/g, "")}.com.br`;
  return (
    <div
      aria-hidden={image ? undefined : true}
      className="border-line bg-card relative flex aspect-[4/3] w-full flex-col overflow-hidden rounded-2xl border shadow-sm"
    >
      <div className="border-line bg-surface flex items-center gap-1.5 border-b px-4 py-3">
        <span className="bg-line h-2.5 w-2.5 rounded-full" />
        <span className="bg-line h-2.5 w-2.5 rounded-full" />
        <span className="bg-line h-2.5 w-2.5 rounded-full" />
        <div className="border-line bg-card text-fg-subtle ml-3 flex-1 truncate rounded-md border px-3 py-1 text-[10px]">
          {address}
        </div>
      </div>
      {image ? (
        <div className="relative flex-1">
          <Image
            src={image}
            alt={`Site ${name} desenvolvido pela Tá Online`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="space-y-4 p-5 sm:p-6">
          <div className="space-y-2">
            <div className="bg-primary/15 h-3 w-1/3 rounded" />
            <div className="bg-fg/10 h-5 w-4/5 rounded" />
            <div className="bg-fg/10 h-5 w-3/5 rounded" />
          </div>
          <div className="bg-accent/30 h-9 w-32 rounded-full" />
          <div className="grid grid-cols-3 gap-2 pt-3">
            {bullets.slice(0, 3).map((b, i) => (
              <div
                key={i}
                className="border-line bg-bg rounded-lg border p-2.5"
              >
                <div className="bg-primary/20 mb-1.5 h-1.5 w-6 rounded" />
                <div className="bg-fg/10 h-1.5 w-full rounded" />
                <div className="bg-fg/10 mt-1 h-1.5 w-3/4 rounded" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

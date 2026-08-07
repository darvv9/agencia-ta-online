import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = {
  message: string;
};

/** Pílula flutuante com rótulo. Antes era só um círculo verde: o ícone sozinho
    não dizia o que acontecia no clique, e ninguém clicava. */
export function FloatingWhatsappBar({ message }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#128C7E] py-3.5 pr-5 pl-4 text-white shadow-lg shadow-black/20 transition-all hover:scale-[1.03] hover:bg-[#0f7a6d] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b5f55] sm:right-8 sm:bottom-8"
    >
      <WhatsappIcon className="h-6 w-6 shrink-0" />
      <span className="text-sm font-semibold tracking-tight sm:text-base">
        Falar no WhatsApp
      </span>
    </a>
  );
}

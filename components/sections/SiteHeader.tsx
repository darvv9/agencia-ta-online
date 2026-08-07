import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { WhatsappIcon } from "@/components/ui/WhatsappIcon";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = { message: string };

export function SiteHeader({ message }: Props) {
  return (
    <div className="bg-bg/85 border-line/60 sticky top-0 z-40 border-b backdrop-blur-md backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Tá Online — página inicial"
          className="rounded-md transition-opacity hover:opacity-80"
        >
          <Logo size="md" />
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#investimento"
            className="text-fg-muted hover:text-fg hidden text-sm font-medium transition-colors sm:inline"
          >
            Investimento
          </a>
          {/* CTA sempre visível: antes era preciso rolar até uma seção para
              achar qualquer caminho de contato. */}
          <Button href={whatsappUrl(message)} external variant="whatsapp" size="sm">
            <WhatsappIcon className="h-4 w-4 shrink-0" />
            Falar agora
          </Button>
        </div>
      </Container>
    </div>
  );
}

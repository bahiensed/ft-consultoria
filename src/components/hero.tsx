import Link from 'next/link'
import { ArrowDown, CirclePlay } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BackgroundPattern } from '@/components/background-pattern'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-3xl">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Conectando Soluções, Profissionais & Empresas
        </h1>
        <p className="mt-6 md:text-lg text-foreground/80">
          Você tem uma ideia, um aplicativo em desenvolvimento
          ou até mesmo um sistema completo?
          Nós o ajudamos no desenvolvimento do produto, na estruturação
          do software e, o mais importante, fazemos seu projeto chegar
          diretamente em quem precisa dele.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Features <ArrowDown className="h-5! w-5!" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="h-5! w-5!" /> Contato
          </Button>
        </div>
      </div>
    </div>
  );
}

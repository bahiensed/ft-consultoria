import Image from 'next/image'
import Link from 'next/link'
import { Brain, CalendarCheck, Code, Cpu, Database, GraduationCap, Landmark, Lightbulb, Network, ShipWheel, ShoppingCart, Wrench } from 'lucide-react'

const skills = [
  {
    icon: Lightbulb,
    title: "Empreendedorismo",
    description: "Visão para criar novos negócios e identificar oportunidades.",
  },
  {
    icon: ShipWheel,
    title: "Estratégia",
    description: "Definição de rumo, objetivos de longo prazo e vantagem competitiva.",
  },
  {
    icon: Landmark,
    title: "Gestão Público-Privada",
    description: "Operação tanto na área privada como no contexto regulatório e de políticas públicas.",
  },
  {
    icon: ShoppingCart,
    title: "Comércio",
    description: "Profunda compreensão da dinâmica de mercado, vendas e distribuição por diversos canais.",
  },
  {
    icon: Network,
    title: "Estrutura Organizacional",
    description: "Desenho minucioso da empresa para executar a estratégia da melhor forma possível.",
  },
  {
    icon: Cpu,
    title: "Liderança de Tecnologia",
    description: "Aponta o caminho da equipe de engenharia para atingir a visão tecnológica e a estratégia de negócio.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Capacitação e desenvolvimento de indivíduos e equipes inteiras para os desafios do futuro.",
  },
  {
    icon: CalendarCheck,
    title: "Gestão de Projetos",
    description: "Uso das principais metodologias da indústria para entregar projetos complexos no prazo e orçamento.",
  },
  {
    icon: Wrench,
    title: "Engenharia e IoT",
    description: "Conhecimento técnico apurado para projetos da indústria, automação e integração de sistema físicos e digitais.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description: "Projetar sistemas complexos desde a fundação técnica até a implementação prática das soluções.",
  },
  {
    icon: Database,
    title: "Big Data",
    description: "Projetar e gerenciar arquiteturas de dados massivos para extrair insights e suportar decisões estratégicas.",
  },
  {
    icon: Brain,
    title: "Machine Learning e IA",
    description: "Implementar modelos inteligentes que automatizam processos, preveem tendências e criam soluções adaptativas.",
  },
]

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full py-10 px-6">
        <h2 id="expertises" className="text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          Nossas habilidades completamente ao seu dispor
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Somos especializados em desenvolver produtos, pessoas e equipes para apresentá-los ao mercado
        </p>

        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Link key={index} href="#">
                <div className="flex gap-6 items-center rounded-lg -mx-2 sm:mx-0 max-w-lg">
                  <div className="h-24 aspect-square shrink-0 rounded-lg bg-muted flex items-center justify-center">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <div className="">
                    <span className="font-semibold tracking-[-0.015em] text-lg">
                      {skill.title}
                    </span>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Skills

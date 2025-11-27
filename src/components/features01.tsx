import Image from 'next/image'
import { Coins, Focus, ShoppingBag, FileSearch } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const features = [
  {
    icon: ShoppingBag,
    title: 'Novos Mercados',
    description:
      'Levamos seu software a clientes resistentes que, de outra forma, nunca o comprariam por falta de estrutura interna.',
    image: '/novos-mercados.jpg'
  },
  {
    icon: Focus,
    title: 'Foco no Produto',
    description:
      'Identificamos quem precisa de sua solução e preparamos a integração de processos e a gestão da mudança no cliente.',
    image: '/foco-no-produto.jpg'
  },
  {
    icon: FileSearch,
    title: 'Pré-Validação',
    description:
      'Nosso trabalho vai além de apresentar leads. Asseguramos que o ambiente do cliente esteja estruturado para a implementação.',
    image: '/pre-validacao.jpg'
  },
  {
    icon: Coins,
    title: 'Receita Recorrente',
    description:
      'Apostamos no seu projeto, trabalhamos e ganhamos juntos com o seu sucesso.',
    image: '/receita-recorrente.jpg'
  },
]

const Features01 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 id="modelo" className="text-4xl md:text-5xl md:leading-[1.2] font-semibold tracking-[-0.03em] text-pretty sm:text-center">
          Muito mais valor para<br /> Freelancers, Startups e Software Houses
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Somos os aceleradores de vendas e adoção de freelancers, startups e software houses.
        </p>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
            >
              <CardHeader>
                <feature.icon />
                <h4 className="mt-3! text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>

              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-40 ml-6 rounded-tl-xl overflow-hidden relative">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>

            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features01

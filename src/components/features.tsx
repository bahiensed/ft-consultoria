import {
  Blocks,
  Coins,
  Settings2,
} from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Customizable Layouts",
    description:
      "Ajudamos a encontrar clientes qualificados e aumentar a sua taxa de conversão.",
  },
  {
    icon: Blocks,
    title: "Interactive Widgets",
    description:
      "Utilizamos canais como LinkedIn, redes sociais e eventos para encontrar os melhores prospects.",
  },
  {
    icon: Coins,
    title: "Receita Recorrente",
    description:
      "Trabalhamos com comissão sobre os recebíveis, focados em receita recorrente.",
  },
]

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-center">
          Por que nos contratar?
        </h2>

        <div className="mt-4 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Entendemos o seu negócio e sabemos como alcançar o seu público-alvo.
        </div>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-(--breakpoint-lg) mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-4 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="size-5" />
              </div>
              <span className="text-lg font-semibold"></span>
              <p className="mt-1 text-foreground/80 text-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Vamos conversar e descobrir como podemos impulsionar o seu negócio!
        </div>
      </div>
    </div>
  )
}

export default Features

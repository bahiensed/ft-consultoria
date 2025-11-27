import { User } from 'lucide-react'

const teamMembers = [
  {
    name: 'José Teles',
    title: 'Engenharia e Gestão de Projetos - PMP e Agile Coach',
  },
  {
    name: 'Alexandre Dantas',
    title: 'Empreendedorismo, Sistema, Dados, Gestão Pública, Comércio e Educação',
  },
  {
    name: 'Tiago Ferreira',
    title: 'Empreendedor na Área de TI, Estratégia e Liderança Tecnológica',
  },
  {
    name: 'Alex Benigno',
    title: 'Hardware, Automação e Internet da Coisas',
  },
  {
    name: 'Douglas Bahiense',
    title: 'Desenvolvimento de Software, Big Data e Inteligência Artificial',
  },
]

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-xl mx-auto">
        <h2 id="equipe" className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Nossa Equipe
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Nossa equipe possui uma grande diversidade de profissionais especializados em desenvolver produtos e abrir novos mercados.
        </p>
      </div>

      <div className="mt-18 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-(--breakpoint-lg) mx-auto">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto">
              <User className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

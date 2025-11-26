import Image from 'next/image'

const teamMembers = [
  {
    name: 'José Teles',
    title: 'Engenharia Mecânica e Gestão de Projetos',
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: 'Alexandre Dutra',
    title: 'Gestão Público-Privada, Comércio e Educação',
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: 'Tiago Ferreira',
    title: 'Estratégia e Liderança Tecnológica',
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: 'Alex',
    title: 'Hardware, Automação e Internet da Coisas',
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: 'Douglas Bahiense',
    title: 'Desenvolvimento de Software, Big Data e Inteligência Artificial',
    imageUrl:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
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
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="h-20 w-20 rounded-full object-cover mx-auto bg-secondary"
              width={120}
              height={120}
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-muted-foreground">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team

import AthleteCard from './AthleteCard'

const teamMembers = [
  {
    name: "Ana Silva",
    instagram: "@anasilva_crossfit",
    role: "Team Leader",
    image: "/api/placeholder/300/400"
  },
  {
    name: "Carlos Mendes",
    instagram: "@carlosmendes_fit",
    role: "Team Athlete",
    image: "/api/placeholder/300/400"
  },
  {
    name: "Mariana Costa",
    instagram: "@mari_crossfit",
    role: "Team Athlete", 
    image: "/api/placeholder/300/400"
  },
  {
    name: "Ricardo Santos",
    instagram: "@ricardo_tcb",
    role: "Team Athlete",
    image: "/api/placeholder/300/400"
  }
]

const masterMember = {
  name: "João Oliveira",
  instagram: "@joao_master_tcb",
  role: "Master Champion",
  image: "/api/placeholder/300/400"
}

const eliteMember = {
  name: "Fernanda Lima",
  instagram: "@fernanda_elite",
  role: "Elite Athlete",
  image: "/api/placeholder/300/400"
}

export default function TeamGroups() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Nossos Grupos
        </h2>
        
        {/* Team Group */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">TEAM</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nosso grupo principal, formado por atletas dedicados que representam 
              os valores fundamentais da TCB: determinação, trabalho em equipe e crescimento contínuo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AthleteCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Master Group */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">MASTER</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Atleta experiente que combina sabedoria e performance, sendo referência 
              para toda a comunidade TCB em técnica e liderança.
            </p>
          </div>
          <div className="flex justify-center">
            <AthleteCard {...masterMember} />
          </div>
        </div>

        {/* Elite Group */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">ELITE</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nosso atleta de elite, representando o mais alto nível de performance 
              e dedicação ao CrossFit, competindo em nível nacional e internacional.
            </p>
          </div>
          <div className="flex justify-center">
            <AthleteCard {...eliteMember} />
          </div>
        </div>
      </div>
    </section>
  )
}
const leaderboardData = [
  { position: 1, name: "Fernanda Lima", category: "Elite", score: "2150 pts", workout: "Fran" },
  { position: 2, name: "João Oliveira", category: "Master", score: "1980 pts", workout: "Helen" },
  { position: 3, name: "Ana Silva", category: "Team", score: "1850 pts", workout: "Grace" },
  { position: 4, name: "Carlos Mendes", category: "Team", score: "1780 pts", workout: "Isabel" },
  { position: 5, name: "Mariana Costa", category: "Team", score: "1720 pts", workout: "Diane" },
  { position: 6, name: "Ricardo Santos", category: "Team", score: "1680 pts", workout: "Karen" },
]

export default function Leaderboard() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Ranking dos Atletas
        </h2>
        
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-primary text-white p-6">
            <h3 className="text-2xl font-bold text-center">
              Classificação Geral - Temporada 2024
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Posição</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Atleta</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Categoria</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Pontuação</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Melhor WOD</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((athlete, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {athlete.position <= 3 && (
                          <span className="mr-2">
                            {athlete.position === 1 && '🥇'}
                            {athlete.position === 2 && '🥈'}
                            {athlete.position === 3 && '🥉'}
                          </span>
                        )}
                        <span className="font-bold text-lg">#{athlete.position}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-800">{athlete.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        athlete.category === 'Elite' ? 'bg-gold text-white' :
                        athlete.category === 'Master' ? 'bg-purple-100 text-purple-800' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {athlete.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-bold text-primary">{athlete.score}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{athlete.workout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
            <p>Última atualização: 15 de dezembro de 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
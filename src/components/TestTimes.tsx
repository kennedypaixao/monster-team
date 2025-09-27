const testTimes = [
  {
    workout: "Fran",
    description: "21-15-9 Thrusters (43kg/30kg) + Pull-ups",
    times: {
      elite: "2:45",
      master: "3:20",
      team: "4:15"
    }
  },
  {
    workout: "Grace",
    description: "30 Clean and Jerks (60kg/43kg) for time",
    times: {
      elite: "2:30",
      master: "3:45",
      team: "5:20"
    }
  },
  {
    workout: "Helen",
    description: "3 rounds: 400m Run + 21 KB Swings + 12 Pull-ups",
    times: {
      elite: "8:45",
      master: "10:30",
      team: "12:15"
    }
  },
  {
    workout: "Murph",
    description: "1 mile Run + 100 Pull-ups + 200 Push-ups + 300 Squats + 1 mile Run",
    times: {
      elite: "35:20",
      master: "42:15",
      team: "48:30"
    }
  }
]

export default function TestTimes() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Tempos dos Testes
        </h2>
        
        <div className="grid gap-8">
          {testTimes.map((test, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{test.workout}</h3>
                <p className="text-gray-600 text-lg">{test.description}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border-2 border-yellow-200">
                  <div className="text-3xl mb-2">🏆</div>
                  <h4 className="text-lg font-bold text-yellow-800 mb-2">ELITE</h4>
                  <div className="text-3xl font-bold text-yellow-600">{test.times.elite}</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200">
                  <div className="text-3xl mb-2">🎖️</div>
                  <h4 className="text-lg font-bold text-purple-800 mb-2">MASTER</h4>
                  <div className="text-3xl font-bold text-purple-600">{test.times.master}</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg border-2 border-primary/30">
                  <div className="text-3xl mb-2">💪</div>
                  <h4 className="text-lg font-bold text-primary mb-2">TEAM</h4>
                  <div className="text-3xl font-bold text-primary">{test.times.team}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Próximos Testes
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-2">Janeiro 2025</h4>
                <p className="text-gray-600">Open Workout 25.1 - Anunciado em breve</p>
              </div>
              <div className="bg-primary/5 rounded-lg p-6">
                <h4 className="font-bold text-primary mb-2">Fevereiro 2025</h4>
                <p className="text-gray-600">Benchmark Testing Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
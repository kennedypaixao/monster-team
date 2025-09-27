export default function WhatIsTCB() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          O que é a TCB?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A TCB (Team CrossFit Brasil) é uma metodologia revolucionária que combina 
              treinamento funcional de alta intensidade com trabalho em equipe. Nossa 
              filosofia vai além do fitness tradicional, criando uma comunidade forte 
              de atletas comprometidos com a excelência.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nosso programa é estruturado em três níveis distintos: Team, Master e Elite, 
              cada um projetado para atender diferentes níveis de experiência e objetivos 
              de performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary text-white px-4 py-2 rounded-full">
                Treinamento Funcional
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-full">
                Alta Intensidade
              </div>
              <div className="bg-primary text-white px-4 py-2 rounded-full">
                Trabalho em Equipe
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="w-48 h-48 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary">TCB</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Monster Team
            </h3>
            <p className="text-gray-600">
              Transformando potencial em performance desde 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
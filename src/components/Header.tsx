export default function Header() {
  return (
    <header className="gradient-bg text-white section-padding text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          MONSTER TEAM
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          CrossFit TCB - Transformando Atletas em Campeões
        </p>
        <div className="flex justify-center items-center">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold">TCB</span>
          </div>
        </div>
      </div>
    </header>
  )
}
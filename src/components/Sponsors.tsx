const sponsors = [
  {
    name: "CrossFit Brasil",
    category: "Principal",
    description: "Parceiro oficial para equipamentos e metodologia"
  },
  {
    name: "NutriMax Suplementos",
    category: "Nutrição",
    description: "Suplementação esportiva de alta qualidade"
  },
  {
    name: "FitGear Equipment",
    category: "Equipamentos",
    description: "Fornecedor de equipamentos profissionais"
  },
  {
    name: "SportsMed Clínica",
    category: "Saúde",
    description: "Cuidados médicos e fisioterapia especializada"
  },
  {
    name: "EnergyDrink Pro",
    category: "Hidratação",
    description: "Bebidas energéticas para atletas"
  },
  {
    name: "Athletic Wear",
    category: "Vestuário",
    description: "Roupas esportivas de performance"
  }
]

export default function Sponsors() {
  return (
    <section className="bg-white section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Nossos Parceiros
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Agradecemos a todas as empresas que apoiam e acreditam no Monster Team. 
            Juntos, construímos uma comunidade mais forte e oferecemos o melhor 
            para nossos atletas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {sponsor.name.split(' ').map(word => word[0]).join('')}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{sponsor.name}</h3>
              <div className="mb-4">
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {sponsor.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{sponsor.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer ser nosso parceiro?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Se sua empresa compartilha dos nossos valores de excelência, determinação 
              e trabalho em equipe, gostaríamos de conversar sobre uma parceria.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Entre em Contato
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60">
          <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 font-bold">LOGO 1</span>
          </div>
          <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 font-bold">LOGO 2</span>
          </div>
          <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 font-bold">LOGO 3</span>
          </div>
          <div className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 font-bold">LOGO 4</span>
          </div>
        </div>
      </div>
    </section>
  )
}
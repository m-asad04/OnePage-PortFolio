function Portfolio() {
  const [portfolioTab, setPortfolioTab] = React.useState('All');

  const portfolioItems = [
    {
      id: 1,
      category: "Web Development",
      title: "Modern Web Platform",
      subtitle: "Clean, responsive user interfaces and robust web experiences.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      category: "Web Development",
      title: "Interactive Web Portal",
      subtitle: "High-performance front-end architecture and clean layouts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      category: "Digital Marketing",
      title: "Targeted SEO & Growth",
      subtitle: "Organic traffic scaling and keyword optimization strategies.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      category: "Digital Marketing",
      title: "Social Advertising Campaigns",
      subtitle: "Conversion-optimized performance campaigns and visual ads.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      category: "Graphic Designing",
      title: "Brand Identity Design",
      subtitle: "Creative logos, color schemes, typography, and guidelines.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      category: "Graphic Designing",
      title: "Creative Visual Layouts",
      subtitle: "Marketing banners, social graphics, and promotional layouts.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredPortfolio = portfolioTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === portfolioTab);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">PortFolio</h2>
          <p className="mt-2 text-slate-600">Explore works categorized by discipline.</p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['All', 'Web Development', 'Digital Marketing', 'Graphic Designing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setPortfolioTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  portfolioTab === tab
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="h-52 overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-sky-600 uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
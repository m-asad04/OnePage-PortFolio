function Portfolio() {
  const [activeTab, setActiveTab] = React.useState('All');

  // Separated categories
  const categories = ['All', 'Web Development', 'Digital Marketing', 'Graphic Designing'];

  const items = [
    {
      id: 1,
      title: "Cool App Design",
      category: "Web Development",
      tags: "Development, Responsive",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Creative Web Portal",
      category: "Web Development",
      tags: "Modern UI, React",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Useful SEO Campaign",
      category: "Digital Marketing",
      tags: "Growth, Analytics",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Performance Ads Matrix",
      category: "Digital Marketing",
      tags: "Targeting, Conversions",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Modern Brand Identity",
      category: "Graphic Designing",
      tags: "Branding, Logo",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Visual Poster Artworks",
      category: "Graphic Designing",
      tags: "Vector, Print & Web",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filtered = activeTab === 'All' 
    ? items 
    : items.filter(i => i.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-[#222831] tracking-tight">
            Our PortFolio
          </h2>
          <div className="w-12 h-1 bg-[#00adb5] mx-auto mt-3 mb-4"></div>
          <p className="text-sm text-slate-500">
            Selected showcase of recent client creations and digital productions.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 text-xs font-heading font-bold uppercase tracking-wider rounded transition-all ${
                  activeTab === cat
                    ? 'bg-[#00adb5] text-white shadow'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#00adb5] hover:text-[#00adb5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* OnePager Styled Hover Overlay */}
                <div className="absolute inset-0 bg-[#222831]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <span className="text-[#00adb5] text-xs font-heading uppercase font-bold tracking-widest mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-white font-heading font-bold text-lg">{item.title}</h4>
                  <p className="text-slate-300 text-xs mt-1">{item.tags}</p>
                </div>
              </div>
              <div className="p-5 border-t border-slate-100">
                <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-[#00adb5] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-[#222831] text-base">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
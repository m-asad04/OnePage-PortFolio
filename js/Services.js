function Services() {
  const serviceList = [
    {
      title: "Web Development",
      desc: "Architecting responsive, lightning-fast, modern websites and applications engineered with high clean standards.",
      icon: "fa-solid fa-code"
    },
    {
      title: "Digital Marketing",
      desc: "Full-funnel SEO optimization, keyword research, PPC, and brand amplification strategies to grow your traffic.",
      icon: "fa-solid fa-bullhorn"
    },
    {
      title: "Graphic Designing",
      desc: "Modern vector brand marks, logos, professional style guides, digital marketing assets, and social banners.",
      icon: "fa-solid fa-pen-nib"
    },
    {
      title: "Photo Editor",
      desc: "High-end photo retouching, precise color correction, contrast balance, and background enhancements.",
      icon: "fa-solid fa-wand-magic-sparkles"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-[#222831] tracking-tight">
            Services
          </h2>
          <div className="w-12 h-1 bg-[#00adb5] mx-auto mt-3 mb-4"></div>
          <p className="text-sm text-slate-500">
            We provide professional, end-to-end digital solutions designed to transform your business.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-[#f8fafc] border border-slate-200 rounded text-center hover:border-[#00adb5] hover:bg-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white border-2 border-slate-200 group-hover:border-[#00adb5] flex items-center justify-center text-[#00adb5] text-2xl transition-colors">
                <i className={service.icon}></i>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#222831] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
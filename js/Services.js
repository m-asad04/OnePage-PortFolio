function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Building clean, fast, and responsive web applications with modern styling and user experience.",
      icon: "fa-solid fa-code"
    },
    {
      title: "Digital Marketing",
      desc: "SEO optimizations, audience targeting, and online campaigns to elevate your reach and conversions.",
      icon: "fa-solid fa-bullhorn"
    },
    {
      title: "Graphic Designing",
      desc: "Crafting eye-catching branding assets, high-impact marketing visuals, logos, and UI designs.",
      icon: "fa-solid fa-pen-nib"
    },
    {
      title: "Photo Editor",
      desc: "Precise retouching, professional color grading, image optimization, and background cleaning.",
      icon: "fa-solid fa-wand-magic-sparkles"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="mt-2 text-slate-600">Tailored digital services to fulfill your business goals.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-sky-300 hover:bg-white transition-all">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-100 text-sky-600 mb-4 text-xl">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
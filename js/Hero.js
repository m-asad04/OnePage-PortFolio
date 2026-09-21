function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center bg-slate-900 pt-20 overflow-hidden">
      {/* Background Banner Image with Template-accurate Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-25 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80')`
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white py-24">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-heading font-bold uppercase tracking-widest text-[#00adb5] border border-[#00adb5]/40 rounded bg-[#00adb5]/10">
          Welcome to OnePager
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
          Muhammad Asad
        </h1>
        <div className="w-16 h-1 bg-[#00adb5] mx-auto mb-8"></div>
        <p className="text-base sm:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          We design and develop awesome websites, smart digital strategies, impactful identities, and high-quality creative visuals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-8 py-3.5 bg-[#00adb5] text-white font-heading text-xs uppercase tracking-widest font-bold rounded hover:bg-[#008b92] transition-all shadow-lg shadow-[#00adb5]/20"
          >
            Our Portfolio
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white/60 text-white font-heading text-xs uppercase tracking-widest font-bold rounded hover:bg-white hover:text-[#222831] transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
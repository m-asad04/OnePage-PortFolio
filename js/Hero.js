function Hero() {
  return (
    <section id="home" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-sky-700 uppercase bg-sky-50 rounded-full border border-sky-200">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Muhammad Asad
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto">
          Specializing in Web Development, Digital Marketing, Graphic Designing, and Professional Photo Editing.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#portfolio" className="px-6 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition shadow-sm">
            View PortFolio
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="py-24 bg-[#222831] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <span className="text-xs uppercase font-heading font-bold tracking-widest text-[#00adb5] block mb-2">
          Who We Are
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-white tracking-tight">
          About
        </h2>
        <div className="w-12 h-1 bg-[#00adb5] mx-auto mt-3 mb-10"></div>

        <div className="bg-[#2a313b] p-8 md:p-12 rounded border border-slate-700/60 shadow-xl">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#00adb5]/20 border-2 border-[#00adb5] text-[#00adb5] flex items-center justify-center text-2xl font-heading font-bold mb-6">
            MA
          </div>
          
          {/* Requested Exact Bio */}
          <blockquote className="text-lg md:text-2xl font-heading font-semibold text-slate-100 leading-relaxed max-w-2xl mx-auto">
            “Myself Muhammad Asad. I've experienced in Web Development, Digital Marketing of 3 Years.”
          </blockquote>

          <div className="mt-8 pt-8 border-t border-slate-700 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded bg-slate-800 text-slate-300 border border-slate-600">
              Web Development
            </span>
            <span className="px-3.5 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded bg-slate-800 text-slate-300 border border-slate-600">
              Digital Marketing
            </span>
            <span className="px-3.5 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded bg-slate-800 text-slate-300 border border-slate-600">
              Graphic Designing
            </span>
            <span className="px-3.5 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded bg-slate-800 text-slate-300 border border-slate-600">
              Photo Editor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
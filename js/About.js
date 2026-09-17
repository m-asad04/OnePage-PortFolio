function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
        </div>
        
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-3xl font-bold mb-6">
            MA
          </div>
          <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed">
            “Myself Muhammad Asad. I've experienced in Web Development, Digital Marketing of 3 Years.”
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">Web Development</span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">Digital Marketing</span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">Graphic Designing</span>
            <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">Photo Editing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
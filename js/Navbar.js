function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Top Left Corner */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block"></span>
              One Pager
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Home</a>
            <a href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">PortFolio</a>
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-md transition-all shadow-sm">Contact Us</a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              <i className={mobileMenuOpen ? "fa-solid fa-xmark text-xl" : "fa-solid fa-bars text-xl"}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600">Home</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600">PortFolio</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700 hover:text-sky-600">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-sky-600 font-semibold">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
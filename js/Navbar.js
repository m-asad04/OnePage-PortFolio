function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Top left corner brand */}
        <a href="#home" className="text-2xl font-heading font-extrabold tracking-tight text-[#222831] flex items-center gap-1.5">
          <span>One</span>
          <span className="text-[#00adb5]">Pager</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00adb5] inline-block mb-1"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-xs uppercase tracking-widest font-heading font-semibold text-slate-700 hover:text-[#00adb5] transition-colors">Home</a>
          <a href="#portfolio" className="text-xs uppercase tracking-widest font-heading font-semibold text-slate-700 hover:text-[#00adb5] transition-colors">PortFolio</a>
          <a href="#services" className="text-xs uppercase tracking-widest font-heading font-semibold text-slate-700 hover:text-[#00adb5] transition-colors">Services</a>
          <a href="#about" className="text-xs uppercase tracking-widest font-heading font-semibold text-slate-700 hover:text-[#00adb5] transition-colors">About</a>
          <a href="#contact" className="px-5 py-2.5 text-xs uppercase tracking-widest font-heading font-bold text-white bg-[#00adb5] hover:bg-[#008b92] rounded transition-all shadow-sm">
            Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-800 text-xl focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-xs uppercase font-heading font-semibold text-slate-800 py-1 hover:text-[#00adb5]">Home</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="block text-xs uppercase font-heading font-semibold text-slate-800 py-1 hover:text-[#00adb5]">PortFolio</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-xs uppercase font-heading font-semibold text-slate-800 py-1 hover:text-[#00adb5]">Services</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-xs uppercase font-heading font-semibold text-slate-800 py-1 hover:text-[#00adb5]">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-xs uppercase font-heading font-bold text-[#00adb5] py-1">Contact Us</a>
        </div>
      )}
    </header>
  );
}
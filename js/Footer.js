function Footer() {
  return (
    <footer className="py-8 bg-[#1a1e24] text-center text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading tracking-wider uppercase text-slate-400">
          © {new Date().getFullYear()} <span className="text-[#00adb5] font-bold">OnePager</span>, All Rights Reserved.
        </p>
        <div className="flex space-x-6 text-base">
          <a href="#home" className="hover:text-[#00adb5] transition-colors"><i className="fa-brands fa-github"></i></a>
          <a href="#home" className="hover:text-[#00adb5] transition-colors"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#home" className="hover:text-[#00adb5] transition-colors"><i className="fa-brands fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}
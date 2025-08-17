export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="section py-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Maxius. All rights reserved.
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
          <a href="#features" className="text-slate-600 hover:text-slate-900">Features</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}

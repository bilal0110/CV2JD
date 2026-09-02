import { FaGithub, FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
            <FaRobot className="text-lg" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              CV2JD
            </h1>
            <p className="hidden text-xs text-slate-500 sm:block">
              AI Resume Intelligence
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#analyze"
            className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
          >
            Analyze
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            How it works
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            About
          </a>
        </div>

        {/* Right side */}
        <a
          href="#analyze"
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
        >
          <span>Start Analysis</span>
          <span>→</span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
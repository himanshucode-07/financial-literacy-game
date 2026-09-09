import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
      isActive
        ? 'bg-green-500 text-white'
        : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
    }`;

  return (
    <nav className="max-w-md mx-auto px-4 sm:px-6 pt-6 flex items-center justify-between">
      <span className="text-slate-100 font-semibold text-xs sm:text-sm">
        💰 FinLit
      </span>
      <div className="flex gap-1">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/game" className={linkClass}>
          Game
        </NavLink>
        <NavLink to="/dashboard" className={linkClass}>
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
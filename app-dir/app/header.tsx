import Link from "next/link";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className="p-4 border-b border-gray-800 flex justify-between items-center text-sm font-semibold">
      <div className="space-x-6 flex items-center">
        <Link className="text-lg leading-none" href="/">
          ▲
        </Link>
        <NavLink
          activeClassName="text-white"
          inactiveClassName="text-gray-400 hover:text-white"
          href="/about"
        >
          About
        </NavLink>
      </div>
    </header>
  );
}

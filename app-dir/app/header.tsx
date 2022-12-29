import Link from "next/link";
import { usePathname } from "next/navigation";
import { getUser } from "../lib/get-user";
import NavLink from "./nav-link";

export default async function Header() {
  let user = await getUser();

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
      <span className="text-gray-400">Welcome, {user.name}!</span>
    </header>
  );
}

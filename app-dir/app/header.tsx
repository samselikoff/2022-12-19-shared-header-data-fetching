import Link from "next/link";
import { usePathname } from "next/navigation";
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
      {/* <span className="text-gray-400">Welcome, {name}!</span> */}
    </header>
  );
}

async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { name: "Sam" };
}

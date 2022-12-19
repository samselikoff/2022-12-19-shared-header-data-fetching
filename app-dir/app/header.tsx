import Link from "next/link";

export default async function Header() {
  let user = await getUser();

  return (
    <header className="p-2 bg-gray-100 shadow-md flex justify-between items-center text-sm">
      <div className="space-x-4">
        <Link
          className="text-gray-500 font-medium hover:text-gray-900"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-500 font-medium hover:text-gray-900"
          href="/about"
        >
          About
        </Link>
      </div>
      <span className="text-gray-500">Welcome, {user.name}!</span>
    </header>
  );
}

async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { name: "Sam" };
}

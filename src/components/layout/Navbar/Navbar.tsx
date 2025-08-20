import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white outline-groove">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ul className="flex gap-4 list-none ">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

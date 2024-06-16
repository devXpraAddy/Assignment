import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>
      <nav>
        <ul>
          <li className="mb-2">
            <Link href="/product">Go to Product Page</Link>
          </li>
          <li>
            <Link href="/save">Go to Save Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

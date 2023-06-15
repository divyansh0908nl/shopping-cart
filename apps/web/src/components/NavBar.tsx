import Link from 'next/link';
import Image from 'next/image';

/**
 * -----------------------------------------------------------------------------
 * Renders the navigation bar component.
 */
export function NavBar() {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link
            href="/addproducts"
            className="mr-5 bg-red-500 hover:bg-red-400 hover:text-gray-900"
          >
            First Link
          </Link>
        </nav>
        <button
          type="button"
          className="mt-4 inline-flex items-center rounded border-0 bg-gray-100
          px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
        >
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

import Link from 'next/link';
import Image from 'next/image';

/**
 * -----------------------------------------------------------------------------
 * Renders the navigation bar component.
 */
export function NavBar() {
  return (
    <header className="body-font text-gray-600">
      <div
        className="
          container mx-auto flex flex-col flex-wrap items-center p-5
          md:flex-row
        "
      >
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
        <nav
          className="
            flex flex-wrap items-center justify-center text-base md:ml-auto
          "
        >
          <Link
            href="/addproducts"
            className="
              mr-5 rounded-md bg-green-200 px-2 py-1 hover:bg-green-400
              hover:text-gray-900
            "
          >
            Add Product
          </Link>
          <Link
            href="/products"
            className="
              mr-5 rounded-md bg-red-200 px-2 py-1 hover:bg-red-400
              hover:text-gray-900
            "
          >
            All Products
          </Link>
        </nav>
      </div>
    </header>
  );
}

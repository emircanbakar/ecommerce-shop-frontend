import { CartContext } from "@/lib/CartContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const { cartProducts } = useContext(CartContext);

  const active = "text-accent transition hover:text-primary";
  const inactive = "text-gray-500 transition hover:text-gray-500/75";

  return (
    <>
      <header className="sticky z-40 top-0 bg-white border-b border-accent border-opacity-30 ">
        <div className="text-md mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link
                className="items-center block text-3xl font-500  text-primary"
                href="#"
              >
                <span className="sr-only">NOON</span>
                <h1>NOON</h1>
              </Link>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-md">
                  <li>
                    <Link
                      className={pathname === "/" ? active : inactive}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={pathname === "/products" ? active : inactive}
                      href="/products"
                    >
                      All Products
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 items-center">
                <Link
                  className="px-4 py-1 text-sm font-medium transition border-r border-primary"
                  href="#"
                >
                  Account
                </Link>

                <div className="ml-4 flow-root lg:ml-4">
                  <Link
                    className="group -m-2 flex items-center p-2"
                    href='/cart'
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <span className="ml-2 text-primary font-bold group-hover:text-text">
                      {cartProducts.length}
                    </span>
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

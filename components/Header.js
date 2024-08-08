import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const active = "text-accent transition hover:text-primary";
  const inactive = "text-gray-500 transition hover:text-gray-500/75";

  return (
    <>
      <header className="bg-white border-b border-accent border-opacity-30 ">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
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
                      href="#"
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
                  className="block px-5 py-2.5 text-sm font-medium transition border-r border-primary"
                  href="#"
                >
                  Account
                </Link>

                <div className="hidden sm:flex">
                  <Link className=" px-2 py-2 text-sm font-medium" href="#">
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

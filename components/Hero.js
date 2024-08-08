import Link from "next/link";

export default function Hero({ product }) {
  if (product) {
    return (
      <>
        <div className="relative overflow-hidden my-14 md:my-10">
          <div className="lg:py-40 min-h-[650px]">
            <div className="relative mx-auto sm:static px-6 lg:px-8">
              <div className="max-w-xl text-start">
                <h1 className="text-3xl md:text-4xl max-md:mb-6 font-semibold tracking-tight text-primary">
                  Kulaklıkta <span className="text-accent">%50</span> İndirim!
                </h1>
                <h1 className="text-4xl md:text-5xl max-md:mb-6 font-bold tracking-tight text-text my-3">
                  {product.title}
                </h1>
                <p className="line-clamp-3 text-lg text-gray-500">
                  {product.description}
                </p>

                {/* <div className="mt-10 max-sm:flex items-center flex-col max-sm:justify-center">
                    <div className="relative ">
                    </div>
                </div> */}

                <div className="flex gap-4 items-center max-sm:justify-center max-sm:mt-6 mt-10">
                  <button
                    type="button"
                    className="rounded-lg border border-primary bg-primary px-5 py-2.5 text-center text-md font-medium shadow-sm transition-all text-white"
                  >
                    Add to Cart
                  </button>

                  <Link
                    href={"/products"}
                    className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-center text-md font-medium text-accent shadow-sm transition-all hover:bg-gray-300"
                  >
                    All Products
                  </Link>
                </div>

                <div className="hidden lg:block absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-8">
                  <div className="flex items-center space-x-6 md:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-12 ">
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out">
                        <img
                          src={product.images[0]}
                          className="p-6 h-full w-full object-center"
                        />
                      </div>
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out">
                        <img
                          src={product.images[1]}
                          className="p-6 h-full w-full object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-12 ">
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out">
                        <img
                          src={product.images[2]}
                          className="h-full w-full object-center"
                        />
                      </div>
                      <div className="w-72 h-80 overflow-hidden rounded-lg border border-secondary transform rotate-3 translate-x-4 hover:-rotate-6 hover:translate-x-8 transition-transform duration-300 ease-in-out">
                        <img
                          src={product.images[3]}
                          className="h-full w-full object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

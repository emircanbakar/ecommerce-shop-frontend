import Link from "next/link";

export default function Products({ products }) {
  return (
    <>
      <div className="mx-auto px-4 py-6">
        <h2 className="text-2xl font-md tracking-tight text-text">
          Our Latest Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products.length > 0 &&
            products.map((product) => (
              <div className="group relative" key={product.id}>
                <div className="group block overflow-hidden border border-accent rounded-xl border-opacity-20 ">
                  <div className="p-1">
                    <div className="relative h-[300px] sm:h-[300px]">
                      <img
                        src={product.images[0]}
                        className="absolute inset-0 object-contain h-full w-full opacity-100 group-hover:opacity-0"
                      />
                       <img
                        src={product.images[1]}
                        className="absolute inset-0 object-contain h-full w-full opacity-0 group-hover:opacity-100"
                      />
                    </div>

                    <div className="relative p-3 border-t">
                    <Link href={'/'}>
                        <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4 truncate">
                            {product.title}
                        </h3>
                    </Link>
                    <div className="mt-1 "></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

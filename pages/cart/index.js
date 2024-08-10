import { CartContext } from "@/lib/CartContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function () {
  const [products, setProducts] = useState([]);
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  function increaseProduct(id) {
    addProduct(id);
    toast.success("Product added");
  }

  function decreaseProduct(id) {
    removeProduct(id);
    toast.success("Removed product!!");
  }

  let total = 0;
  for (const productId of cartProducts) {
    const price = parseFloat(
      products.find((p) => p._id === productId)?.price || 0
    );
    total += price;
  }

  return (
    <>
      <section className="flex justify-between max-md:flex-col space-x-4 ">
        <div className="md:w-2/3 px-4">
          <div className="mt-16 md:mt-6">
            <header className="text-center flex justify-between w-full">
              <h1 className="text-xl font-bold text-accent sm:text-3xl">
                Your Cart
              </h1>
            </header>
            {!products?.length ? (
              <p className="my-6 text-start text-2xl text-red-600 font-bold">
                {" "}
                Your cart is empty!
              </p>
            ) : (
              <>
                {products?.length > 0 &&
                  products.map((product) => (
                    <div className="mt-8" key={product._id}>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-4 justify-between">
                          <img
                            src={product.images[0]}
                            alt=""
                            className="h-16 w-16 object-cover"
                          />
                          <div className="">
                            <h3 className="text-md text-text max-w-md">
                              {product.title}
                            </h3>
                            <dl className="mt-1 space-y-px text-sm text-text">
                              <p>
                                {cartProducts.filter((id) => id === product._id)
                                  .length * product.price}
                                TL
                              </p>
                            </dl>
                          </div>

                          <div>
                            <label htmlFor="Quantity" className="sr-only">
                              Quantity
                            </label>

                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-text transition hover:opacity-75 border "
                                onClick={() => decreaseProduct(product._id)}
                              >
                                -
                              </button>

                              <input
                                type="number"
                                id="Quantity"
                                value={
                                  cartProducts.filter(
                                    (id) => id === product._id
                                  ).length
                                }
                                className="h-10 w-16 rounded border border-secondary text-primary font-bold text-center [-moz-appearance:_textfield] sm:text-md [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                              />

                              <button
                                type="button"
                                className="w-10 h-10 leading-10 text-text transition hover:opacity-75 border"
                                onClick={() => increaseProduct(product._id)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))}
                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className=" max-w-md space-y-4">
                    <dl className="space-y-0.5 text-md text-gray-700">
                      <div className="flex justify-end text-red-400 border-b mb-3">
                        <button onClick={clearCart}>Clear Cart</button>
                      </div>
                      <div className="flex justify-between">
                        <dt>Total: </dt>
                        <dd className="pl-2">{formatPrice(total)} TL</dd>
                      </div>
                    </dl>
                    <div className="flex justify-end">
                      <Link
                        class="group flex items-center justify-between gap-4 rounded-lg border border-current px-4 py-2 text-orange-600 transition-colors hover:bg-orange-600 focus:outline-none focus:ring active:bg-orange-500"
                        href="/products"
                      >
                        <span class="font-medium transition-colors group-hover:text-white">
                          Continue shopping
                        </span>

                        <span class="shrink-0 rounded-full border border-orange-600 bg-white p-2 group-active:border-orange-500">
                          <svg
                            class="h-4 w-4 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {!products.length ? (
          ""
        ) : (
          <div className="mt-16 md:w-1/3 md:mt-6 border border-opacity-20">
            <header className="text-center w-full space-y-2 p-4">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Shipping details and Payment
              </h1>
              <p className="text-md text-gray-500 sm:text-xl">
                This site currently does not have a shipping or sales system.
              </p>
            </header>
          </div>
        )}
      </section>
    </>
  );
}

import { CartContext } from "@/lib/CartContext";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  if (product) {
    return (
      <section className="mt-20 md:mt-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:aspect-h-2 lg:aspect-w-2 lg:rounded-lg overflow-hidden px-4 md:px-2">
            <img
              src={product.images[0]}
              className="w-full h-full object-contain object-center border border-primary rounded-lg px-2"
            />
          </div>

          <div className="grid grid-cols-2 lg:grid lg:grid-cols-1 lg:gap-y-4 px-2 gap-2 md:gap-0 md:px-2">
            {product.images.slice(1, 3).map((image, index) => (
              <div
                key={index}
                className="lg:aspect-h-2 lg:aspect-w-3 lg:overflow-hidden lg:rounded-lg"
              >
                <img
                  src={image}
                  className="w-full h-full object-contain object-center border rounded-lg border-secondary p-2"
                />
              </div>
            ))}
          </div>

          <div className="p-4 lg:p-8 border">
            <h1 className="text-3xl font-md text-gray-900">{product.title}</h1>
            <div className="mt-6">
              <h2 className="text-xl font-md text-gray-900">Description</h2>
              <p className="mt-2 text-gray-700">{product.description}</p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-md text-gray-900">Details</h2>
              <p className="mt-2 text-gray-700 list-disc list-inside">
                {product?.details}
              </p>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <h2 className="text-xl font-md text-gray-900">Price</h2>
              <p className="mt-2 text-primary font-semibold text-lg">
                {formatPrice(product.price)} TL
              </p>
            </div>
            <div className="w-full">
              <button
                className="bg-primary text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-dark w-full"
                onClick={() => {
                  addProduct(product._id);
                  toast.success("Item added to cart!!");
                }}
              >
                Add to Cart
              </button>
              <Link
                href="/products"
                className="bg-accent text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-dark w-full flex items-center justify-center text-center"
              >
                Return to Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <p>Product not found.</p>;
  }
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

import Hero from "@/components/Hero";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Products from "@/components/Products";

export default function Home({ featuredProduct, newProducts }) {
  return (
    <div>
      <Hero product={featuredProduct} />
      <hr className="my-8 h-px border-0 bg-gray-300" />
      <Products products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const featuredId = "66b369ef3fc88cffe26dd65f";
  const featuredProduct = await Product.findById(featuredId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: 1 },
    limit: 5,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

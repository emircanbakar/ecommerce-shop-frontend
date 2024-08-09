import Hero from "@/components/Hero";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Products from "@/components/Products";
import CollectionProduct from "@/components/CollectionProduct";


export default function Home({ featuredProduct, newProducts, collectionProduct }) {
  return (
    <div>
      <Hero product={featuredProduct} />
      <hr className="my-8 h-px border-0 bg-gray-300" />
      <Products products={newProducts} />
      <hr className="my-8 h-px border-0 bg-gray-300" />
      <CollectionProduct product={collectionProduct} />
    </div>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const featuredId = "66b369ef3fc88cffe26dd65f";
  const collectionId = "66b36a133fc88cffe26dd662";
  const featuredProduct = await Product.findById(featuredId);
  const collectionProduct = await Product.findById(collectionId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: 1 },
    limit: 5,
  });
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      collectionProduct: JSON.parse(JSON.stringify(collectionProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

import { ProductCollections } from "../components/ProductCollections";
import "../styles/product.css";
import { Breadcrumb } from "../components/Breadcrumb";
const Product = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
          <Breadcrumb />
          <ProductCollections />
        </div>
      </div>
    </>
  );
};

export default Product;

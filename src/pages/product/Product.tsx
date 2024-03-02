import "./product.scss";
import Single from "../../components/single/Single";
import { singleProduct } from "../../data";

const Product = () => {
  return (
    <div className="product">
      <div className="productContainer">
        <Single {...singleProduct} />
      </div>
    </div>
  );
};

export default Product;

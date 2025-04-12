// Dynamic Navigation:

// In Shop.jsx, clicking the shopping bag icon (<FontAwesomeIcon icon={faBagShopping} />) triggers the handleProductClick function, which navigates to Sproduct.jsx with the selected product's details passed via state.
// Dynamic Product Rendering:

// In Sproduct.jsx, the product details are accessed using useLocation and rendered dynamically.
// The variants array determines the number of small images displayed below the main product image.
// Routing:

// The App.jsx file includes a new route for Sproduct.jsx (/sproduct).



import "../style/style.css";
import { useLocation } from "react-router-dom";

const Sproduct = () => {
  const { state } = useLocation();
  const { product } = state || {};

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      {/* Product Details Section */}
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img
            src={
              new URL(`../img/products/${product.img}`, import.meta.url).href
            }
            width="100%"
            id="MainImg"
            alt={product.name}
          />
          <div className="small-img-group">
            {product.variants.map((variant, index) => (
              <div key={index} className="small-img-col">
                <img
                  src={
                    new URL(`../img/products/${variant}`, import.meta.url).href
                  }
                  width="100%"
                  className="small-img"
                  alt={`Variant ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-shirt</h6>
          <h4>{product.name}</h4>
          <h2>{product.price}</h2>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input type="number" value="1" />
          <button id="addtocart" className="normal">
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>
            This is a detailed description of the product. It includes all the
            features and benefits.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Sproduct;

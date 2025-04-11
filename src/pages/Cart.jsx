import "../style/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBagShopping, faCircleUser);

const Cart = () => {
  return (
    <div>
      {/* Header Section */}
      <section id="header">
        <Link to="/">
          <img
            src={
              new URL(
                "../img/Her Beauty Logo - Original with Transparent Background  Without Name and Slogan- 54x59  - .png",
                import.meta.url
              ).href
            }
            className="logo"
            alt="Her Beauty Logo"
          />
        </Link>
        <ul id="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="active" to="/cart">
              <FontAwesomeIcon icon={faBagShopping} />
            </Link>
            </li>
            <li>
              <a href="userprofile.html">
                            <FontAwesomeIcon icon={faCircleUser} />
                          </a>
                          
          </li>
        </ul>
      </section>

      {/* Page Header */}
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      {/* Cart Section */}
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>{/* Dynamic content will be inserted here */}</tbody>
        </table>
      </section>

      {/* Cart Add Section */}
      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
          </div>
          <button className="normal">Apply</button>
        </div>
        <div id="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$0.00</strong>
              </td>
            </tr>
          </table>
          <button id="payment" className="normal">
            Proceed to checkout
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="section-p1">
        <div className="col">
          <img
            className="logo"
            src={
              new URL(
                "../img/Her Beauty Logo - Original with Transparent Background  Without Name and Slogan- 54x59  - .png",
                import.meta.url
              ).href
            }
            alt="Her Beauty Logo"
          />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> Mokattam
          </p>
          <p>
            <strong>Phone:</strong> Mokattam
          </p>
          <p>
            <strong>Hours:</strong> Mokattam
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              <FontAwesomeIcon icon={faBagShopping} />
              <FontAwesomeIcon icon={faCircleUser} />
            </div>
          </div>
        </div>
        <div className="col">
          <h4>About</h4>
          <Link to="/about">About us</Link>
          <Link to="/delivery">Delivery Information</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="col">
          <h4>Account</h4>
          <Link to="/signin">Sign In</Link>
          <Link to="/cart">View Cart</Link>
          <Link to="/wishlist">My Wishlist</Link>
          <Link to="/track">Track My Order</Link>
          <Link to="/help">Help</Link>
        </div>
        <div className="install">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>
          <div className="row">
            <img
              src={new URL("../img/pay/app.jpg", import.meta.url).href}
              alt="App Store"
            />
            <img
              src={new URL("../img/pay/play.jpg", import.meta.url).href}
              alt="Google Play"
            />
          </div>
          <p>Secure Payment Gateways</p>
          <img
            src={new URL("../img/pay/pay.png", import.meta.url).href}
            alt="Payment Methods"
          />
        </div>
        <div className="copyright">
          <p>© 2021, herbeauty - React Ecommerce App</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart;

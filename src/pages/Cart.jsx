import "../style/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
            <Link to="/userprofile">
              <FontAwesomeIcon icon={faCircleUser} />
            </Link>
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

      {/* Newsletter Section */}
      <section id="newsletter">
        <div className="newstext">
          <h4>Sign Up for Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button id="Log In" className="normal">
            Log In
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
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href="#">About us</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="col">
          <h4>Account</h4>
          <a href="#">Sign In</a>
          <a href="#">View Cart</a>
          <a href="#">My Wishlist</a>
          <a href="#">Track My Order</a>
          <a href="#">Help</a>
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

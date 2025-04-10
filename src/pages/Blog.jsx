import "../style/style.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons"; // Solid icons
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Brand icons

const Blog = () => {
  return (
    <div>
      {/* Header Section */}
      <section id="header">
        <a href="#">
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
        </a>
        <div>
          <ul id="navbar">
            <li>
              <a href="#" id="close">
                <FontAwesomeIcon icon={faBagShopping} />
              </a>
            </li>
            <li>
              <Link to="/">Home</Link> {/* Link to Home page */}
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <Link className="active" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="cart.html" id="lg-bag">
                <FontAwesomeIcon icon={faBagShopping} />
              </a>
            </li>
            <li>
              <a href="userprofile.html">
                <FontAwesomeIcon icon={faCircleUser} />
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <FontAwesomeIcon icon={faBagShopping} />
          </a>
          <FontAwesomeIcon id="bar" icon={faArrowRight} />
        </div>
      </section>

      {/* Page Header */}
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>

      {/* Blog Section */}
      <section id="blog">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="blog-box">
            <div className="blog-img">
              <img
                src={new URL(`../img/blog/b${item}.jpg`, import.meta.url).href}
                alt={`Blog ${item}`}
              />
            </div>
            <div className="blog-details">
              <h4>The Cotton-jersey Zip-up Hoodies</h4>
              <p>
                Kickstarter man braid godard clorng book. Raclette waistcoat
                selfies yr wolf charteuse hexagon irony, godard...
              </p>
              <a href="#">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
          </div>
        ))}
      </section>

      {/* Pagination Section */}
      <section id="pagination" className="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
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

export default Blog;

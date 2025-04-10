import "../style/style.css";
import { Link } from "react-router-dom"; // Import Link from React Router
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faStar,
  faOutdent,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
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
                <FontAwesomeIcon icon={faTimes} />
              </a>
            </li>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <a href="shop.html">Shop</a>
            </li>
            <li>
              <Link to="/blog">Blog</Link> {/* Link to Blog page */}
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
                <FontAwesomeIcon icon={faUserCircle} />
              </a>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <a href="cart.html">
            <FontAwesomeIcon icon={faBagShopping} />
          </a>
          <FontAwesomeIcon id="bar" icon={faOutdent} />
        </div>
      </section>

      {/* Hero Section */}
      <section id="hero">
        <div className="glitch">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glitch-img"></div>
          ))}
        </div>

        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>

        <div className="text-glitchcontainer">
          <div className="glitch-text" data-text="Welcome to herbeauty">
            <h5>Welcome to herbeauty</h5>
          </div>
          <div className="glow">
            <h6>Welcome to herbeauty</h6>
          </div>
        </div>
        <div className="scanlines"></div>

        <p>Save more with coupons &amp; up to 70% off!</p>
        <button>Shop Now</button>
      </section>

      {/* Feature Section */}
      <section id="feature" className="section-p1">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="fe-box">
            <img
              src={
                new URL(`/src/img/features/f${item}.png`, import.meta.url).href
              }
              alt={`Feature ${item}`}
            />
            <h6>
              {
                [
                  "Free Shipping",
                  "Online Order",
                  "Save Money",
                  "Promotions",
                  "Happy Sell",
                  "24/7 Support",
                ][item - 1]
              }
            </h6>
          </div>
        ))}
      </section>

      {/* Product Sections */}
      {["Featured Products", "New Arrivals"].map((title, idx) => (
        <section key={idx} id="product1" className="section-p1">
          <h2>{title}</h2>
          <p>Summer Collection New modern design</p>
          <div className="pro-container">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="pro">
                <img
                  src={
                    new URL(
                      `/src/img/products/${idx === 0 ? "f" : "n"}${i + 1}.jpg`,
                      import.meta.url
                    ).href
                  }
                  alt={`Product ${i + 1}`}
                />
                <div className="des">
                  <span>adidas</span>
                  <h5>Cartoon Astronaut T-Shirts</h5>
                  <div className="star">
                    {[...Array(5)].map((_, starIdx) => (
                      <FontAwesomeIcon key={starIdx} icon={faStar} />
                    ))}
                  </div>
                  <h4>$78</h4>
                </div>
                <a href="#">
                  <FontAwesomeIcon icon={faBagShopping} className="cart" />
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Other Sections */}
      <section id="banner" className="section-m1">
        <h4>Repair Service</h4>
        <h2>
          Up to <span>70% off</span> - All t-shirts &amp; Accessories
        </h2>
        <button className="normal">Explore More</button>
      </section>

      <section id="sm-banner" className="section-p1">
        {["Crazy deals", "spring/ summer"].map((text, idx) => (
          <div
            key={idx}
            className={`banner-box${idx === 1 ? " banner-box2" : ""}`}
          >
            <h4>{text}</h4>
            <h2>{idx === 0 ? "buy 1 get 1 free" : "upcoming season"}</h2>
            <span>The best classic dress is on sale at cara</span>
            <button className="white">
              {idx === 0 ? "Learn More" : "Collection"}
            </button>
          </div>
        ))}
      </section>

      <section id="banners3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`banner-box${i > 0 ? ` banner-box${i + 1}` : ""}`}
          >
            <h3>upcoming season</h3>
            <h4>Winter Collection -50% OFF</h4>
          </div>
        ))}
      </section>

      <section id="newsletter">
        <div className="newstext">
          <h4>Sign Up for Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email" />
          <button className="normal">Sign Up</button>
        </div>
      </section>

      {/* Footer */}
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
            alt="Logo"
          />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> Mokattam
          </p>
          <p>
            <strong>Phone:</strong> +20 123 456 7890
          </p>
          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon">
              {/* Add clickable links for each social media icon */}
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

        {["About", "Account"].map((title, idx) => (
          <div key={title} className="col">
            <h4>{title}</h4>
            {[
              [
                "About us",
                "Delivery Information",
                "Privacy Policy",
                "Terms & Conditions",
                "Contact Us",
              ],
              ["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help"],
            ][idx].map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>
        ))}

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
          <p>© 2023, herbeauty - React Ecommerce App</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

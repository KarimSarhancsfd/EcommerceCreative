import "../style/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleUser,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
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
            <Link className="active" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <FontAwesomeIcon icon={faBagShopping} />
            </Link>
          </li>
          <li>
            <Link to="/userprofile">
              <FontAwesomeIcon icon={faCircleUser} />
            </Link>
          </li>
        </ul>
        <div id="mobile">
          <a href="cart.html">
            <FontAwesomeIcon icon={faBagShopping} />
          </a>
          <FontAwesomeIcon id="bar" icon={faOutdent} />
        </div>
      </section>

      {/* Page Header */}
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Her beauty is simply beautiful</p>
      </section>

      {/* About Section */}
      <section id="about-head" className="section-p1">
        <img
          src={new URL("../img/about/a6.jpg", import.meta.url).href}
          alt="About Us"
        />
        <div>
          <h2>Who We ARE?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            fugiat quas! Asperiores officiis ad rem totam dicta laboriosam minus
            cupiditate, quas accusantium excepturi. Libero aliquam ipsam quasi
            consequuntur error quos.
          </p>
          <abbr title="">
            Create stunning images with as much or as little as you like using
            basic and creative modes.
          </abbr>
          <br />
          <br />
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">
            Create stunning images with as much or as little as you like using
            basic and creative modes.
          </marquee>
        </div>
      </section>

      {/* About App Section */}
      <section id="about-app" className="section-p1">
        <h1>
          Download Our <a href="#">App</a>
        </h1>
        <div className="video">
          <video
            autoPlay
            muted
            loop
            src={new URL("../img/about/1.mp4", import.meta.url).href}
          ></video>
        </div>
      </section>

      {/* Features Section */}
      <section id="feature" className="section-p1">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="fe-box">
            <img
              src={
                new URL(`../img/features/f${item}.png`, import.meta.url).href
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

export default About;

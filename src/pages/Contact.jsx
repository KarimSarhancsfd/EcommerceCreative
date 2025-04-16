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

const Contact = () => {
  const sendMail = () => {
    // Add your email sending logic here
    alert("Email sent successfully!");
  };

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
            <Link className="active" to="/contact">
              Contact
            </Link>
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
      </section>

      {/* Page Header */}
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </section>

      {/* Contact Details Section */}
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fa-regular fa-map"></i>
              <p>56 Glassford Street Glasgow G1 1UL New York</p>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                fugiat? Corrupti recusandae possimus unde eos natus magnam neque
                optio officiis.
              </p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                fugiat? Corrupti recusandae possimus unde eos natus magnam neque
                optio officiis.
              </p>
            </li>
            <li>
              <i className="fa-regular fa-clock"></i>
              <p>10AM to 5PM</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.938216974702!2d31.349028299999997!3d30.067305399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e0b67b29aab%3A0xcadc62fe3a00998b!2sOxford%20City%20Center!5e0!3m2!1sen!2seg!4v1739080830576!5m2!1sen!2seg"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-details">
        <form onSubmit={(e) => e.preventDefault()}>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input id="sendername" type="text" placeholder="Your Name" />
          <input id="email" type="text" placeholder="E-mail" />
          <input id="subject" type="text" placeholder="Subject" />
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button
            id="submit"
            type="submit"
            onClick={sendMail}
            className="normal"
          >
            Submit
          </button>
        </form>
        <div className="people">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <img
                src={new URL(`../img/people/${item}.png`, import.meta.url).href}
                alt={`Person ${item}`}
              />
              <p>
                <span>John Doe</span> Senior Marketing Manager <br />
                phone: +000 123 000 77 88 <br />
                Email: contact@example.com
              </p>
            </div>
          ))}
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
          <a href="#">Term & Conditions</a>
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

export default Contact;

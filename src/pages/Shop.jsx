import "../style/style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCircleUser,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Shop = () => {
  const products = [
    { id: 1, img: "f1.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
    { id: 2, img: "f2.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
    { id: 3, img: "f3.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
    { id: 4, img: "f4.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
    { id: 5, img: "f5.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
    { id: 6, img: "f6.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
    { id: 7, img: "f7.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
    { id: 8, img: "f8.jpg", name: "Cartoon Astronaut T-Shirts", price: "$78" },
  ];

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
            <Link className="active" to="/shop">
              Shop
            </Link>
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
            <Link to="/cart">
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
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      {/* Product Section */}
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {products.map((product) => (
            <div key={product.id} className="pro">
              <img
                src={
                  new URL(`../img/products/${product.img}`, import.meta.url)
                    .href
                }
                alt={product.name}
              />
              <div className="des">
                <h5>{product.name}</h5>
                <div className="star">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon="fa-star" />
                  ))}
                </div>
                <h4>{product.price}</h4>
              </div>
              <a href="#">
                <FontAwesomeIcon icon={faBagShopping} className="cart" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination Section */}
      <section id="pagination" className="section-p1">
        <Link className="active" to="/shop">
          1
        </Link>
        <Link to="/page2">2</Link>
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
          <button className="normal">Sign Up</button>
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

export default Shop;

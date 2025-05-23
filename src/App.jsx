import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Sproduct from "./pages/Sproduct";
import Userprofile from "./pages/Userprofile"; // Import Userprofile

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sproduct" element={<Sproduct />} />
        <Route path="/userprofile" element={<Userprofile />} />{" "}
        {/* Add Userprofile route */}
      </Routes>
    </Router>
  );
}

export default App;

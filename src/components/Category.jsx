import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faPhone,
  faHeart,
  faShoppingBag,
  faTimes,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems] = useState([1, 2, 3]); // Example cart items

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-sm bg-opacity-90">
      {/* Top Navigation */}
      <nav className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Trust Badge */}
            {/* <div className="flex items-center gap-2 text-emerald-600">
              <FontAwesomeIcon 
                icon={faShieldAlt} 
                className="h-5 w-5 animate-pulse"
              />
              <span className="text-sm font-medium">100% Secure Checkout</span>
            </div> */}

            {/* Desktop Menu */}
            {/* <div className="hidden md:flex flex-1  justify-center">
              <div className="flex space-x-8">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <Link
                    key={num}
                    to={`#menu${num}`}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      num === 1
                        ? "text-gray-900 bg-gray-50 rounded-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg hover:translate-y-[-2px]"
                    }`}
                  >
                    Menu{num}
                  </Link>
                ))}
              </div>
            </div> */}

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                <Link
                  to="#"
                  className="flex items-center px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:translate-y-[-1px]"
                >
                  <FontAwesomeIcon icon={faTruck} className="h-4 w-4 mr-2" />
                  <span>Dealer Area</span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50 focus:outline-none transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                  <span className="block w-6 h-0.5 bg-gray-600 mb-1 transition-transform duration-300"></span>
                  <span className="block w-6 h-0.5 bg-gray-600 mb-1 transition-opacity duration-300"></span>
                  <span className="block w-6 h-0.5 bg-gray-600 transition-transform duration-300"></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="px-4 py-3 space-y-1">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Link
                key={num}
                to={`#menu${num}`}
                className="block px-4 py-2.5 text-base font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-300 hover:pl-6"
              >
                Menu{num}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            {/* Categories Dropdown */}
            <div className="relative flex-1 sm:flex-none">
              <button
                className="flex items-center w-full sm:w-48 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-500 transition-all duration-300 group"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <span className="truncate">Categories</span>
                <svg
                  className="ml-2 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCategoriesOpen && (
                <div className="absolute mt-1 w-full sm:w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10 animate-fadeIn">
                  <div className="py-2">
                    {[...Array(12)].map((_, i) => (
                      <Link
                        key={i}
                        to="#"
                        className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200 group"
                      >
                        <span className="truncate group-hover:translate-x-2 transition-transform duration-300">
                          Category {i + 1}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Phone Number */}
            <div className="hidden md:flex items-center gap-2.5 px-3.5 py-2 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-4 w-4 text-blue-600 animate-ring"
                />
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-ping-slow opacity-0"></div>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">24/7 Support</span>
                <span className="block font-medium text-gray-800">000.0000000</span>
              </div>
            </div>

            {/* Search Form */}
            <div className="flex-1 min-w-[280px]">
              <div className="flex rounded-lg shadow-sm border border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all duration-300">
                <select className="pl-3 pr-8 py-2.5 bg-transparent text-sm text-gray-700 border-r border-gray-300 appearance-none focus:outline-none hover:border-blue-300 transition-colors duration-300">
                  <option>All categories</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>Category {i + 1}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 px-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 focus:ring-0 placeholder-gray-400"
                />
                <button className="px-4 py-2.5 text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:scale-110">
                  <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link
                to="#"
                className="p-2.5 text-gray-600 hover:text-red-500 rounded-lg hover:bg-red-50 transition-all duration-300 relative group"
              >
                <FontAwesomeIcon icon={faHeart} className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-4 w-4 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                  2
                </span>
              </Link>

              <div className="relative">
                <button
                  className="p-2.5 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 relative group"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  <div className="relative">
                    <FontAwesomeIcon icon={faShoppingBag} className="h-5 w-5" />
                    <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300">
                      {cartItems.length}
                    </span>
                  </div>
                </button>

                {isCartOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-10 animate-slideDown">
                    <div className="p-4 space-y-4">
                      <div className="text-lg font-semibold text-gray-900 flex items-center justify-between">
                        <span>Your Cart</span>
                        <span className="text-sm text-blue-600">{cartItems.length} items</span>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {cartItems.map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between py-3 animate-fadeInUp"
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg border border-gray-200 animate-pulse bg-gray-50"></div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  Product {item}
                                </p>
                                <p className="text-sm text-gray-500">23,00 €</p>
                              </div>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:rotate-90">
                              <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                       </div>
                      {/* <Link
                        to="#"
                        className="block w-full py-2.5 text-center text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:translate-y-[-1px] shadow-md hover:shadow-blue-200"
                      >
                        Secure Checkout →
                      </Link> */}
                    </div> *
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
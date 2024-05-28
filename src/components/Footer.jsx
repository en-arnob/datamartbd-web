import React from "react";
import {Link} from "react-scroll";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <h1 className="text-xl font-bold text-blue-950">DataMart<span className='text-orange-600'>BD Limited</span></h1>
          </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                <li>
              <span
                  className="text-gray-700 transition hover:text-gray-700/75">
                  <Link
                      smooth={true}
                      to="about"

                      className="cursor-pointer"
                  >
                            About
                        </Link>
              </span>
                </li>

                <li>
                <span
                    className="text-gray-700 transition hover:text-gray-700/75">
                  <Link
                      smooth={true}
                      to="services"

                      className="cursor-pointer"
                  >
                            Services
                        </Link>
              </span>
                </li>
                <li>
                <span
                    className="text-gray-700 transition hover:text-gray-700/75">
                  <Link
                      smooth={true}
                      to="products"
                      className="cursor-pointer"
                  >
                            Our Products
                        </Link>
              </span>
                </li>
                <li>
                <span
                    className="text-gray-700 transition hover:text-gray-700/75">
                  <Link
                      smooth={true}
                      to="contact"

                      className="cursor-pointer"
                  >
                            Contact Us
                        </Link>
              </span>
                </li>
            </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

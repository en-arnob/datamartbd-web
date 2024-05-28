import React from "react";
import {Link} from "react-scroll";
import { FaMapPin } from "react-icons/fa";
import {FiMapPin} from "react-icons/fi";
import {AiFillMail} from "react-icons/ai";
import {FaGlobe, FaPhoneVolume} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-teal-600">
            <h1 className="text-xl font-bold text-blue-950">DataMart<span className='text-orange-600'>BD Limited</span></h1>
          </div>
            <div className="flex mt-1 gap-1 justify-center text-teal-600">
                <span className='mt-1 text-red-600'><FiMapPin /></span>
                <h1 className="text-md text-center text-blue-950">House 13, Road-2, Block–A, Banasree, Dhaka</h1>
            </div>
            <div className="mt-1 gap-2 flex justify-center text-teal-600">
                <span className='mt-1 text-blue-600'><AiFillMail /></span>
                <h1 className="text-md text-center text-blue-950">info.datamartbd@gmail.com</h1>
            </div>
            <div className="mt-1 flex gap-1 justify-center text-teal-600">
                 <span className='mt-1 text-green-800'><FaGlobe/></span>
                <h1 className="text-md text-center text-blue-950">www.datamartbd.com</h1>
            </div>
            <div className="mt-1 gap-1 flex justify-center text-teal-600">
                <span className='mt-1 text-indigo-700'><FaPhoneVolume /></span>
                <h1 className="text-md text-center text-blue-950">+8801911-612696 +8801740-831036</h1>
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

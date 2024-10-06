import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../../public/assets";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[3fr_1fr_1fr] gap-10 mt-20">
          <div className="max-w-xl pb-6">
            <Link to="/" className="">
              <img
                className="w-44 cursor-pointer"
                src={assets.logo}
                alt="logo"
              />
            </Link>
            <p className="mt-6 text-[16px] text-gray-900 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="pb-6">
            <h4 className="text-lg font-medium text-gray-900 pb-4">COMPANY</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/home"
                  className="text-gray-800 hover:text-primary font-medium"
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-primary font-medium"
                >
                  {" "}
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-primary font-medium"
                >
                  {" "}
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-800 hover:text-primary font-medium"
                >
                  {" "}
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 pb-4">
              GET IN TOUCH
            </h4>
            <ul className="flex flex-col gap-2 mb-4">
              <li>
                <Link
                  to=""
                  className="text-gray-800 hover:text-primary font-medium"
                >
                  {" "}
                  +1-212-456-7890
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-800 hover:text-primary font-medium"
                >
                  {" "}
                  greatstackdev@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-3 text-center border-t">
          <p className="font-medium text-sm">
            Copyright © 2024 GreatStack - All Right Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

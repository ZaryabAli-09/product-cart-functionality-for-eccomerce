import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer className="flex justify-between p-20 border-2 mt-20 ">
        <div className="online-shopping flex flex-col">
          <h3 className="font-bold mb-4">ONLINE SHOPPING</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Cards</a>
          <a href="#">Myntra Insider</a>
        </div>
        <div className="customer-policies flex flex-col">
          <h3 className="font-bold mb-4">CUSTOMER POLICIES</h3>
          <a href="#">Contact Us</a>
          <a href="#">FAQS</a>
          <a href="#">T&C</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Track Orders</a>
          <a href="#">Shipping</a>
          <a href="#">Cancellation</a>
          <a href="#">Returns</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Greivance Officer</a>
        </div>
        <div className="experience flex flex-col ">
          <h3 className="font-bold mb-20">EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <div className="mb-2 cursor-pointer">
            <FaGooglePlay className="text-4xl" />
            <p className="text-xs font-bold">GET IT ON GOOGLE PLAY</p>
          </div>
          <div className="cursor-pointer">
            <AiFillAppstore className="text-4xl" />
            <p className="text-xs font-bold">DOWNLOAD ON PLAYSTORE</p>
          </div>
        </div>
        <div className="keepintouch font-bold">
          <h4 className="mb-10">KEEP IN TOUCH</h4>
          <FaFacebookSquare className="text-2xl mb-2 cursor-pointer" />
          <FaTwitter className="text-2xl mb-2 cursor-pointer" />
          <FaYoutube className="text-2xl mb-2 cursor-pointer" />
          <FaInstagram className="text-2xl  cursor-pointer" />
        </div>
      </footer>
      <p className="relative   bottom-10 pl-20">
        © 2024 www.myntra.com. All rights reserved.
      </p>
    </>
  );
};

export default Footer;

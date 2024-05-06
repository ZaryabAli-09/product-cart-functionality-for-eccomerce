import React from "react";
import MyntraImg from "../assets/Myntra.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cartItems);
  return (
    <nav
      className="flex justify-between items-center bg-white
         py-3  shadow-md  sticky top-0 z-50"
    >
      <ul className="flex  items-center space-x-8 text-xs font-bold">
        <Link to="/">
          <img className="w-20 mx-8" src={MyntraImg} alt="logo" />
        </Link>
        <li>
          <Link className="py-6 hover:border-b-4 border-red-600" to="#">
            MEN
          </Link>
        </li>
        <li>
          <Link className="py-6 hover:border-b-4 border-pink-600" to="#">
            WOMEN
          </Link>
        </li>
        <li>
          <Link className="py-6 hover:border-b-4 border-orange-600" to="#">
            KIDS
          </Link>
        </li>
        <li>
          <Link className="py-6 hover:border-b-4 border-yellow-400" to="#">
            HOME & LIVING
          </Link>
        </li>
        <li>
          <Link className="py-6 hover:border-b-4 border-blue-400" to="#">
            BEAUTY
          </Link>
        </li>
        <li>
          <Link className="py-6 hover:border-b-4 border-red-400" to="#">
            STUDIO
          </Link>
        </li>
      </ul>
      <div className="flex space-x-4  pr-20 items-center justify-end">
        <input
          type="text"
          className=" outline-none py-3 rounded w-96 mr-8 px-10 bg-slate-100 text-sm focus:bg-white "
          placeholder="search for products,brand and more "
        />
        <FaRegUserCircle
          className="text-2xl 
             cursor-pointer border-2 border-white hover:border-slate-950"
        />
        <FaRegHeart className="text-2xl cursor-pointer border-2 border-white hover:border-slate-950" />
        <Link to="/cart">
          <IoBag className="text-2xl  cursor-pointer border-2 border-white hover:border-slate-950" />
        </Link>

        <span className="relative bg-black text-white w-6 text-center rounded-xl h-6 font-bold right-6 bottom-2">
          {cartItems.length}
        </span>
      </div>
    </nav>
  );
};

export default Header;

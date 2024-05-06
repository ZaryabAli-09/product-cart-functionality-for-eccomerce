import React, { useEffect } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { cartActions } from "../store/store";
const Main = () => {
  const items = useSelector((store) => store.items);
  const loader = useSelector((status) => status.loader);
  const cartItems = useSelector((store) => store.cartItems);
  const dispatch = useDispatch();
  return (
    <main className="Products  flex justify-between flex-wrap p-10">
      {!loader ? (
        <Loader />
      ) : (
        items.map((item, i) => {
          return (
            <div
              className="product-card border border-gray-200  w-60  m-5 p-2  "
              key={item.id}
            >
              <img className=" h-60 w-full" src={item.image} alt="" />
              <div className="rating flex font-bold mt-2">
                <span className="flex items-center  ">
                  {item.rating.stars}{" "}
                  <FaStarHalfAlt className="ml-1 mr-4 text-yellow-500" />
                </span>
                ||
                <span className="ml-4">{item.rating.count}</span>
              </div>
              <div className="company  font-extrabold text-sm ">
                {item.company}
              </div>
              <div className="item-name text-gray-500 text-xs">
                {item.item_name}
              </div>
              <div className="item-price space-x-2 mt-2 text-xs">
                <span className="font-bold">Rs. {item.current_price}</span>
                <span className=" line-through">{item.original_price}</span>
                <span className="text-red-600">
                  ({item.discount_percentage}% OFF)
                </span>
              </div>
              {cartItems.includes(item.id) ? (
                <button
                  onClick={() => {
                    dispatch(cartActions.removeFromBag(item.id));
                  }}
                  className=" w-full p-1  rounded-xl font-normal text-sm bg-red-500 mt-2 hover:bg-red-600"
                >
                  Remove From Bag
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(cartActions.addToBag(item.id));
                  }}
                  className=" w-full p-1  rounded-xl font-normal text-sm bg-green-400 mt-2 hover:bg-green-500"
                >
                  Add To Bag
                </button>
              )}
            </div>
          );
        })
      )}
    </main>
  );
};

export default Main;

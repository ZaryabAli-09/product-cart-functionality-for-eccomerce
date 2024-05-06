import React from "react";
import { cartActions } from "../store/store";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const loader = useSelector((status) => {
    return status.loader;
  });
  const cartItem = useSelector((store) => store.cartItems);
  const finalItems = items.filter((item) => {
    const itemFound = cartItem.includes(item.id);
    return itemFound;
  });
  // bag summary calculations
  const CONVENIENCE_FEES = 99;
  let totalItem = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <main className="  flex justify-between p-10">
      {!loader ? (
        <Loader />
      ) : (
        <>
          <div className="w-1/2 flex flex-col ">
            {finalItems.map((item) => {
              return (
                <div
                  className="flex space-x-4 items-center border my-2 relative "
                  key={item.id}
                >
                  <div className="item-left-part">
                    <img className="w-40" src={item.image} />
                  </div>
                  <div className="item-right-part">
                    <div className="font-bold text-sm ">{item.company}</div>
                    <div className="font-light text-sm mb-2">
                      {item.item_name}
                    </div>
                    <div className="text-sm space-x-2">
                      <span className="font-bold">Rs {item.current_price}</span>
                      <span className="line-through">
                        Rs {item.original_price}
                      </span>
                      <span className="text-red-600">
                        ({item.discount_percentage}% OFF)
                      </span>
                    </div>
                    <div className="mt-4 bg-blue-400 rounded text-center text-sm font-bold">
                      <span className="">{item.return_period} days</span> return
                      available
                    </div>
                    <div className="bg-pink-400 rounded text-center mt-1 font-bold text-sm">
                      Delivery by
                      <span className="delivery-details-days">
                        {item.delivery_date}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-1 right-1">
                    <MdCancel
                      className="text-4xl text-black cursor-pointer hover:text-red-600"
                      onClick={() => {
                        dispatch(cartActions.removeFromBag(item.id));
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>{" "}
          <div className=" w-1/2 flex justify-center ">
            <div className="w-2/3  border p-2 flex flex-col pt-10 bg-gray-100 h-60 ">
              <div className="text-sm font-extrabold">
                PRICE DETAILS ({totalItem.length} ITEMS)
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-semibold">Total MRP</span>
                <span className="font-bold text-sm">Rs.{totalMRP}</span>
              </div>
              <div className="flex justify-between items-center ">
                <span className="text-xs font-semibold">Discount on MRP</span>
                <span className="font-bold text-sm">Rs.{totalDiscount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold">Convenience Fee</span>
                <span className="font-bold text-sm">Rs.{CONVENIENCE_FEES}</span>
              </div>
              <hr />
              <div className="flex justify-between items-center my-4">
                <span className="text-sm font-semibold">Total Amount</span>
                <span className="font-bold text-sm">Rs.{finalPayment}</span>
              </div>
              <button className=" w-full p-1  rounded text-white text-sm font-bold bg-pink-400 mt-2 hover:bg-pink-500">
                PLACE ORDER
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;

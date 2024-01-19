import React from "react";
import { Cart_DATA, cartDataItem } from "@components/AddToCart/data/index";
import { MdCancel } from "react-icons/md";

const CartItem = () => {
  return (
    <>
      {Cart_DATA.map((item: cartDataItem) => {
        return (
          <>
            <div className="flex items-center justify-between shadow-2xl p-4 rounded-md my-12 relative">
              <div className=" text-red-400 w-16 h-16 text-2xl absolute top-0 right-4 transform translate-x-full">
                <MdCancel />
              </div>
              <div className="flex items-center gap-2">
                <img src={item.image} alt="cartImage" />
                <span className="font-medium text-base text-mainParaColor w-2/4">
                  {item.title}
                </span>
              </div>
              <span className="text-xl font-semibold text-btnColor">
                {item.price}
              </span>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CartItem;

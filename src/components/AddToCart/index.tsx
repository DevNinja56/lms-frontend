import React from "react";
import { MdCancel } from "react-icons/md";
import useCourseCart, { ItemType } from "@hooks/cart-hook";

const CartItem = () => {
  const { cartItems, removeFromCart } = useCourseCart();

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item: ItemType) => (
          <div
            key={item.id}
            className="flex items-center justify-between shadow-2xl p-4 rounded-md my-12 relative"
          >
            <div className=" text-red-400 w-16 h-16 text-2xl absolute top-0 right-4 transform translate-x-full">
              <MdCancel onClick={() => removeFromCart(item.id)} />
            </div>
            <div className="flex items-center gap-2">
              <img src={item.image} alt="cartImage" />
              <span className="font-medium text-base text-mainParaColor w-2/4">
                {item.name}
              </span>
            </div>
            <span className="text-xl font-semibold text-btnColor">
              {item.price}
            </span>
          </div>
        ))
      ) : (
        <div className=" text-mainParaColor text-center font-semibold text-[30px]">Cart is Empty</div>
      )}
    </>
  );
};

export default CartItem;

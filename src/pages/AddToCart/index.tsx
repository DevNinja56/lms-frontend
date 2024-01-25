import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import TopBanner from "@components/TopBanner";
import Heading from "@components/Common/Heading";
import Paragraph from "@components/Common/Paragraph";
import CartItem from "@components/AddToCart";
import Button from "@components/Common/Button";
import useCourseCart from "@hooks/cart-hook";

const AddToCart = () => {
  const { calculateTotalPrice } = useCourseCart();
  return (
    <>
      <div className="pl-16">
        <TopBanner />
      </div>
      <div className="text-center pt-3 pb-6">
        <Heading heading="My Cart" />
        <Paragraph paragraph="We’re on a mission to deliver engaging, curated courses at a reasonable price." />
      </div>
      <div className="w-4/5 mx-auto my-4">
        <CartItem />
      </div>
      <div className="w-1/5 float-right mr-32 mb-8">
        <div className="bg-gray-200 rounded-md p-4 ">
          <span className="font-medium text-2xl py-4">Cart Totals</span>
          <div className="flex justify-between border-b-2 border-gray-400 py-4 ">
            <span className="text-base font-normal text-mainParaColor">
              Subtotal
            </span>
            <span className="text-base font-normal text-mainParaColor">
              $1.298
            </span>
          </div>
          <div className="flex justify-between py-4 ">
            <span className="text-base font-normal text-mainParaColor">
              Total
            </span>
            <span className="text-base font-normal text-mainParaColor">
              ${calculateTotalPrice()}
            </span>
          </div>
        </div>
        <NavLink to={ROUTES.CHECKOUT}>
          <Button
            text="Proceed to checkout"
            className="bg-btnColor text-white my-2.5 py-2.5  px-11"
          />
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;

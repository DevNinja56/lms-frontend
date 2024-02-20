import React from "react";
import TopBanner from "@components/TopBanner";
import Heading from "@components/Common/Heading";
import Paragraph from "@components/Common/Paragraph";
import Button from "@components/Common/Button";
import useCourseCart from "@hooks/cart-hook";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { authStateType } from "@slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@route/constants.route";
import Navbar from "@components/Navbar";
import Footer from "@components/UserFooter";

interface RootState {
  auth: authStateType;
}

const Checkout = () => {
  const { cartItems, calculateTotalPrice } = useCourseCart();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();
  const OrderPlacedFunction = () => {
    if (user) {
      toast.error("You are not Log In...");
      navigate(ROUTES.SIGN_IN);
    } else {
      toast.success("Order is placed Successfully..");
    }
  };

  return (
    <>
      <Navbar />
      <TopBanner />
      <div className="text-center pt-12 pb-12">
        <Heading heading="Checkout" />
        <Paragraph paragraph="We’re on a mission to deliver engaging, curated courses at a reasonable price." />
      </div>
      <div className="flex gap-4 px-5  w-[88%] mx-auto">
        <div className="bg-gray-100 w-[30%] flex flex-col gap-4 border-2 py-8 rounded">
          <span className="font-medium text-xl px-4">Your Order</span>
          <div className="flex justify-between border-b-2 px-4 pb-2.5">
            <span className="text-sm font-normal text-mainParaColor">
              Product
            </span>
            <span className="text-sm font-normal text-mainParaColor">
              Subtotal
            </span>
          </div>
          {cartItems.map((item) => {
            return (
              <div className="flex justify-between px-4">
                <span className="text-sm font-normal text-mainParaColor w-3/5">
                  {item.name}
                </span>
                <span className="text-sm font-normal text-mainParaColor">
                  {item.price}
                </span>
              </div>
            );
          })}
          <div className="flex justify-between border-b-2 px-4 pb-2.5">
            <span className="text-sm font-normal text-mainParaColor">
              Subtotal
            </span>
            <span className="text-sm font-normal text-mainParaColor">
              Pkr {calculateTotalPrice()}
            </span>
          </div>
          <div className="flex justify-between px-4 py-2">
            <span className="text-sm font-normal text-mainParaColor">
              Total
            </span>
            <span className="text-sm font-normal text-mainParaColor">
            Pkr {calculateTotalPrice()}
            </span>
          </div>
        </div>
        <div className="w-8/12 bg-gray-100 flex flex-col gap-7 border-2 p-8 rounded	">
          <span className="font-medium text-xl">Payment</span>
          <div className="flex flex-col gap-4">
            <div>
              <input type="radio" name="paymentMethod" />
              <span className="pl-3">Direct bank transfer</span>
            </div>
            <span className="font-light text-sm text-mainParaColor w-10/12">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </span>
            <div>
              <input type="radio" name="paymentMethod" />
              <span className="pl-3">Check payments</span>
            </div>
            <div>
              <input type="radio" name="paymentMethod" />
              <span className="pl-3">Cash on delivery</span>
            </div>
            <div>
              <input type="radio" name="paymentMethod" />
              <span className="pl-3">PayPal</span>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={OrderPlacedFunction}
        text="Place Order"
        className="text-white bg-btnColor ml-[6.5rem] my-5 py-5 px-[8rem] mb-20"
      />
      <Footer />
    </>
  );
};

export default Checkout;

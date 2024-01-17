import React from "react";
import TopBanner from "@components/TopBanner";
import Heading from "@components/Common/Heading";
import Paragraph from "@components/Common/Paragraph";
import Button from "@components/Common/Button";

const Checkout = () => {
  return (
    <>
      <div>
        <div className="pl-5 mb-5">
          <TopBanner />
        </div>
        <div className="text-center pt-3 pb-6">
          <Heading heading="Checkout" />
          <Paragraph paragraph="We’re on a mission to deliver engaging, curated courses at a reasonable price." />
        </div>
        <div className="flex gap-4 px-5"> 
          <div className="bg-gray-100 w-[30%] flex flex-col gap-4 border-2 py-8 rounded">
            <span className="font-medium text-xl px-4">Your Order</span>
            <div className="flex justify-between border-b-2 px-4 pb-2.5">
              <span className="text-sm font-normal text-mainParaColor">Product</span>
              <span className="text-sm font-normal text-mainParaColor">Subtotal</span>
            </div>

            <div className="flex justify-between px-4">
              <span className="text-sm font-normal text-mainParaColor">
                The Complete HTML & CSS <br /> Bootcamp 2023 Edition
              </span>
              <span className="text-sm font-normal text-mainParaColor">$59.00</span>
            </div>
            <div className="flex justify-between border-b-2 px-4 pb-2.5">
              <span className="text-sm font-normal text-mainParaColor">
                The Complete HTML & CSS <br />
                Bootcamp 2023 Edition
              </span>
              <span className="text-sm font-normal text-mainParaColor">$59.00</span>
            </div>

            <div className="flex justify-between border-b-2 px-4 pb-2.5">
              <span className="text-sm font-normal text-mainParaColor">Subtotal</span>
              <span className="text-sm font-normal text-mainParaColor">$178.00</span>
            </div>

            <div className="flex justify-between px-4 py-2">
              <span className="text-sm font-normal text-mainParaColor">Total</span>
              <span className="text-sm font-normal text-mainParaColor">$9,218.00</span>
            </div>
          </div>
          <div className="w-8/12 bg-gray-100 flex flex-col gap-7 border-2 p-8 rounded	">
            <span className="font-medium text-xl">Payment</span>
            <div className="flex flex-col gap-4">
              <div>
                <input type="radio" name="paymentMethod"/>
                <span className="pl-3">Direct bank transfer</span>
              </div>

              <span className="font-light text-sm text-mainParaColor w-10/12">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </span>

              <div>
                <input type="radio" name="paymentMethod"/>
                <span className="pl-3">Check payments</span>
              </div>

              <div>
                <input type="radio" name="paymentMethod"/>
                <span className="pl-3">Cash on delivery</span>
              </div>

              <div>
                <input type="radio" name="paymentMethod"/>
                <span className="pl-3">PayPal</span>
              </div>

            </div>
          </div>
        </div>
        <Button text="Place Order" className="text-white bg-btnColor ml-5 my-5 py-5 px-[8.60rem]"/>
      </div>
    </>
  );
};

export default Checkout;

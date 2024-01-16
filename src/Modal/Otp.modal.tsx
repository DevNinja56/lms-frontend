import Button from "@components/button";
import { useUi } from "@hooks/user-interface";
import React from "react";
import PhoneInput from "react-phone-input-2";

const OtpModal = () => {
  const { modalState, hideModal } = useUi();
  return (
    <div className="w-[450px] p-5 relative bg-white rounded-sm shadow-gray-500 shadow-sm ">
      <h3 className=" text-xl mb-5 font-semibold ">Edit Phone Number</h3>
      <span
        className="absolute top-2 right-5 text-gray-300 cursor-pointer text-2xl "
        onClick={hideModal}
      >
        x
      </span>
      <form className="px-2">
        <PhoneInput
          country={"pk"}
          onlyCountries={["pk"]}
          placeholder="Phone Number"
          value={modalState.phone}
          onChange={(phone) => modalState.setPhone(phone)}
          inputProps={{ required: true }}
        />
        <div className="w-full mt-5">
          <Button
            type="button"
            onClick={hideModal}
            text="Change"
            className="w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default OtpModal;

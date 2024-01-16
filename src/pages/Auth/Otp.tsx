import Button from "@components/button";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useUserAuth } from "@hooks/auth-hook";
import { useUi } from "@hooks/user-interface";
import { ROUTES } from "@route/constants.route";
import { modalType } from "@slices/ui.slice";
import { fetchRequest } from "@utils/axios/fetch";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();
  const { updateModal } = useUi();
  const { user, updateUserDetails, loggedInUser } = useUserAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<null | boolean>(null);

  useEffect(() => {
    if (!user.phone_number && !user.email) navigate(ROUTES.SIGN_UP);
  }, [user]);

  useEffect(() => {
    if (isError) setIsError(false);
    if (otp.length >= 6 && isError !== null) handleSubmitFunction();
  }, [otp]);

  const handleSubmitFunction = () => {
    if (otp.length >= 6) {
      setIsLoading(true);
      fetchRequest({
        url: API_ENDPOINTS.AUTH.VERIFY_OTP,
        type: "post",
        body: { email: user.email, otp },
      })
        .then((res) => {
          updateUserDetails(res.data.user);
          loggedInUser({
            access: res.data.accessToken,
            refresh: res.data.refreshToken,
          });
          navigate(ROUTES.HOMEPAGE);
        })
        .catch((err) => {
          setIsError(true);
          toast.error(err.response.data.message);
        })
        .finally(() => setIsLoading(false));
    } else {
      toast.error("please enter your otp");
      setIsError(true);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-grayBg w-full h-screen ">
      <div className="w-full lg:w-4/6 max-w-[1200px] flex justify-center rounded-lg overflow-hidden min-h-[450px] ">
        <div className="w-2/5 bg-mainColor lg:grid place-items-center hidden ">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="w-full md:w-3/5 bg-white py-5 px-3 sm:px-10 grid place-items-center ">
          <div className="w-[80%]">
            <h2 className="text-center text-3xl mb-10 font-light ">
              Verify OTP
            </h2>
            <div className="my-3">
              <p className="text-center mb-5">OTP sent to this number</p>
              <PhoneInput
                country={"pk"}
                disabled
                onlyCountries={["pk"]}
                placeholder="Phone Number"
                value={user.phone_number}
              />
              <p className=" text-mainColor hover:text-blue-600 text-sm mb-3 mt-1 cursor-pointer ">
                <span
                  className=" select-none inline-block mt-2  "
                  onClick={() =>
                    updateModal({
                      type: modalType.otp,
                      state: { name: "change Number" },
                    })
                  }
                >
                  Change Number
                </span>
              </p>
            </div>
            <div className="otp_input_container my-5">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                renderInput={(props) => (
                  <input
                    {...props}
                    type="number"
                    style={{
                      border: isError ? "1px solid red" : "1px solid #eef5fa",
                    }}
                  />
                )}
                containerStyle="otp-input-style"
                inputStyle="input-style"
                shouldAutoFocus={true}
              />
              <span className="capitalize text-sm  ">
                <span>resend otp after : </span>
                <span className="text-red-600 my-2 inline-block ">30s</span>
              </span>
            </div>
            <div className="space-y-10">
              <div className="w-full">
                <Button
                  type="button"
                  disabled={isLoading}
                  onClick={handleSubmitFunction}
                  text="Verify"
                  className="w-4/5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

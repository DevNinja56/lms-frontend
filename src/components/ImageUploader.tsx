import React, {useRef, useState} from "react";
import AvatarEditor from "react-avatar-editor";
import {
  FiRotateCcw,
  FiRotateCw,
} from "react-icons/fi";
import Button from "./button";
import {useUserAuth} from "@hooks/auth-hook";
import {useUi} from "@hooks/user-interface";
import CloudinaryContext from "./Cloudinary";
import {fetchRequest} from "@utils/axios/fetch";
import {API_ENDPOINTS} from "@constant/api-endpoints";
import toast from "react-hot-toast";

const ImageUploader = () => {
  const [imageZoom, setImageZoom] =
    useState("1.5");
  const [imageRotate, setImageRotate] =
    useState<number>(0);
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const {user, updateUserDetails} = useUserAuth();
  const [selectedImage, setSelectedImage] =
    useState(
      user.gender !== "female"
        ? "/images/profile/male.png"
        : "/images/profile/female.png"
    );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const {hideModal} = useUi();

  const imageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      e.target.files &&
      e.target.files.length > 0
    ) {
      setSelectedImage(
        URL.createObjectURL(e.target.files[0])
      );
    }
  };

  const handleSubmitImage = async (img: any) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "dashboard");
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_APP_CLOUDINARY_NAME
        }/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      fetchRequest({
        url: API_ENDPOINTS.USER.UPDATE_PROFILE.replace(
          ":id",
          user.id
        ),
        type: "patch",
        body: {avatar: data.secure_url},
      })
        .then((res) => {
          updateUserDetails(res.data);
          toast.success(res.message);
          hideModal();
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`${
        isLoading && "pointer-events-none"
      }`}>
      <CloudinaryContext
        cloudName={
          import.meta.env.VITE_APP_CLOUDINARY_NAME
        }
        apiKey={
          import.meta.env
            .VITE_APP_CLOUDINARY_PUBLIC_KEY
        }
        apiSecret={
          import.meta.env
            .VITE_APP_CLOUDINARY_PRIVATE_KEY
        }>
        <label className="w-[95%] mx-[2.5%] text-sm text-gray-900 border-2 border-gray-200 rounded-[5px] cursor-pointer focus:outline-none flex justify-between items-center mb-3 relative">
          <input
            onChange={imageChange}
            className="absolute inset-0 w-full h-full hidden cursor-pointer"
            id="file_input"
            accept="image/*"
            type="file"
          />
          <h1 className="pl-3 font-semibold">
            Choose a file...
          </h1>
          <span className="inline-block px-4 py-[6px] bg-gray-200 border border-gray-300 font-semibold cursor-pointer">
            Browse
          </span>
        </label>

        <AvatarEditor
          ref={ref}
          image={selectedImage}
          width={290}
          height={290}
          border={100}
          color={[0, 0, 0, 0.4]}
          borderRadius={250}
          scale={+imageZoom}
          rotate={imageRotate}
        />

        <div className="mx-auto w-4/6 my-5 ">
          <input
            type="range"
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer  "
            step={0.1}
            value={imageZoom}
            onChange={(e) =>
              setImageZoom(e.target.value)
            }
            min={1}
            max={3}
          />
        </div>

        <div className="flex justify-center gap-5">
          <button
            className="text-2xl"
            onClick={() =>
              setImageRotate((prev) => prev - 90)
            }>
            <FiRotateCcw />
          </button>
          <button
            className="text-2xl"
            onClick={() =>
              setImageRotate((prev) => prev + 90)
            }>
            <FiRotateCw />
          </button>
        </div>
        <div className="flex justify-center my-4 gap-1 w-1/2 mx-auto">
          <Button
            onClick={() => {
              handleSubmitImage(
                ref?.current
                  ?.getImage()
                  .toDataURL()
              );
            }}
            disabled={isLoading}
            text="ok"
            color="text-gray-400"
            spinnerColor="text-mainColor"
            className="bg-white hover:bg-mainColor  text-gray-400 hover:text-white border border-gray-300 w-[100px] uppercase "
          />
          <Button
            text="cancel"
            onClick={hideModal}
            color="text-gray-400"
            className="bg-white hover:bg-mainColor text-gray-400 hover:text-white border border-gray-300 w-[100px] uppercase "
          />
        </div>
      </CloudinaryContext>
    </div>
  );
};

export default ImageUploader;

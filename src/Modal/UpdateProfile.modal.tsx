import ImageUploader from "@components/ImageUploader";
import React from "react";

const UpdateProfile = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm shadow-gray-200 ">
      <h2 className="text-xl font-semibold mb-3 mt-0 ">Profile Picture</h2>
      <ImageUploader />
    </div>
  );
};

export default UpdateProfile;

import { useUi } from "@hooks/user-interface";
import React from "react";

const TeachersSupport = () => {
  const { modalState } = useUi();
  return (
    <div className="bg-white p-5">
      <h1>TeachersSupport</h1>
      <p className="text-2xl m-8 capitalize ">{modalState.name}</p>
    </div>
  );
};

export default TeachersSupport;

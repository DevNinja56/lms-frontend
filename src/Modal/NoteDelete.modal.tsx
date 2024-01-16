import Button from "@components/button";
import { useUi } from "@hooks/user-interface";
import X from "@pages/Bookmarks/BookmarkIcons/X";
import React from "react";

const NoteDelete = () => {
  const { hideModal } = useUi();
  return (
    <div className="bg-white p-8 pt-5 min-w-[508px] text-center rounded-md">
      <div className="w-full flex justify-end mb-3">
      <p className="cursor-pointer" onClick={hideModal}>
      <X />
      </p>
      </div>
      <h1 className="text-[23px] text-mainParaColor font-medium">Delete entire  note?</h1>
      <div className="mt-7 mb-5  flex justify-around ">
        <Button text="No" onClick={hideModal} 
        padding="py-[14px] px-[85px]"
        className="mx-0 rounded-[5px] border border-mainColor"
        color="text-mainColor"
        background="bg-white" />
        <Button text="Yes" 
        padding="py-[14px] px-[85px]"
        className="mx-0 rounded-[5px]"
        color="text-white"
        background="bg-mainColor"
        />
      </div>
    </div>
  );
};

export default NoteDelete;

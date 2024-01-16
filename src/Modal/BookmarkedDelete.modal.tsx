import Button from "@components/button";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useUi } from "@hooks/user-interface";
import X from "@pages/Bookmarks/BookmarkIcons/X";
import { fetchRequest } from "@utils/axios/fetch";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookMarkedDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { hideModal, modalState } = useUi();
  const { type, id, callback } = modalState as {
    type: "readings" | "videos" | "false";
    id: string;
    callback: () => void;
  };

  const handleDeleteBookmark = () => {
    setIsLoading(true);
    if (type === "false") {
      toast.error("Did not delete");
      return;
    }
    toast
      .promise(
        fetchRequest({
          url: API_ENDPOINTS.USER_ACTION[type].replace(":id", id),
          type: "post",
          body: {
            type: "bookmark_remove",
          },
        }),
        {
          loading: "Loading...",
          success: "Bookmark removed successfully",
          error: "An Error occurred",
        }
      )
      .finally(() => {
        callback?.();
        hideModal();
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-white p-8 pt-5 min-w-[508px] text-center rounded-md ">
      <div className="w-full flex justify-end mb-3">
      <p className="cursor-pointer" onClick={hideModal}>
      <X />
      </p>
      </div>
      <h1 className="text-[23px] text-mainParaColor font-medium">Delete Bookmark?</h1>
      <div className="mt-7 mb-5 flex">
        <Button text="No" onClick={hideModal}     
        padding="py-[14px] px-[85px]"
        className="mx-0 rounded-[5px] border border-mainColor"
        color="text-mainColor"
        background="bg-white" />
        <Button
          text="Yes"
          onClick={handleDeleteBookmark}
          disabled={isLoading}
          padding="py-[14px] px-[85px]"
          className="mx-0 rounded-[5px]"
          color="text-white"
          background="bg-mainColor"
        />
      </div>
    </div>
  );
};

export default BookMarkedDelete;

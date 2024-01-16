import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import Button from "@components/button";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { linksTypes } from "@pages/Subjects/SubjectWeeksDay";
import { daysContent, days_categoryType } from "@utils/Types";
import { fetchRequest } from "@utils/axios/fetch";

const MarkAsCompletedButton: React.FC<{
  data: daysContent;
  refetch: () => void;
}> = ({ data, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMarked, setIsMarked] = useState(
    !!data.usersActions[0]?.markAsCompleted
  );
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;

  const handleBookmark = () => {
    setIsMarked((prev) => !prev);
    setIsLoading(true);
    fetchRequest({
      url: API_ENDPOINTS.USER_ACTION[type].replace(":id", data.id),
      type: "post",
      body: {
        type: "markAsCompleted",
      },
    })
      .then(() => {
        toast.success("Mark as completed successfully");
      })
      .finally(() => {
        refetch?.();
        setIsLoading(false);
      });
  };

  return (
    <>
      {(type === linksTypes.reading || type === linksTypes.video) && (
        <Button
          text="Mark As Completed"
          className="ml-0 px-5 py-[10px] roudned-[5px]"
          onClick={handleBookmark}
          disabled={isMarked || isLoading}
          isLoader={isLoading}
        />
      )}
    </>
  );
};

export default MarkAsCompletedButton;

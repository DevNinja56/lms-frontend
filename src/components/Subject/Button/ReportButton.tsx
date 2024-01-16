import React, { useState } from "react";
import { BsFlag, BsFlagFill } from "react-icons/bs";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import { daysContent, days_categoryType } from "@utils/Types";
import { useSearchParams } from "react-router-dom";

const ReportButton: React.FC<{ data: daysContent; refetch?: () => void }> = ({
  data,
  refetch,
}) => {
  const [isReported, setReported] = useState(!!data.usersActions[0]?.report);
  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { updateModal } = useUi();

  const handleBookmark = () => {
    !data.usersActions[0]?.report &&
      updateModal({
        type: modalType.report,
        state: {
          url: API_ENDPOINTS.USER_ACTION[type].replace(":id", data.id),
          reviewField: { type: "report" },
          callback: () => {
            refetch?.();
            setReported(true);
          },
        },
      });
  };

  return (
    <button
      className="rating grid place-items-center px-5 "
      onClick={handleBookmark}
      disabled={isReported}
    >
      <span className="icon text-2xl text-mainParaColor">
        {isReported ? <BsFlagFill /> : <BsFlag />}
      </span>
      <span className="text-xs/3 text-mainParaColor">
        {isReported ? "Reported" : "Report"}
      </span>
    </button>
  );
};

export default ReportButton;

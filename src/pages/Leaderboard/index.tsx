import Percentage from "@components/Leaderboard/Percentage";
import I from "@components/LiveLectures/LecturesIcon/I";
import { filterContentType } from "@components/SideFilter";
import { useUi } from "@hooks/user-interface";
import React, { useEffect } from "react";

const Leaderboard = () => {
  const { updateFilter } = useUi();

  useEffect(() => {
    updateFilter({ type: filterContentType.leaderboard, state: {} });
  }, []);
  return (
    <div className="p-8 w-[95%]">
      <div className="bg-white shadow-xl rounded-[10px] p-5">
        <div className="flex items-center gap-2">
        <div className="text-xl h-5 w-5 bg-mainColor rounded-full flex items-center justify-center">
              <I />
            </div>
          <p className="text-lightBlackColor font-normal text-sm">
            Leaderboard shows top 20 positions based on course completion, tests
            and assignments scores.
          </p>
        </div>
        <Percentage
          name={"ZAIN"}
          percentage={"80%"}
          number={"1"}
          leaderBoardText={"4123"}
          leaderBoardPercentage={"92%"}
        />
        <Percentage
          name={"AREEBA ZIA"}
          percentage={"80%"}
          number={"2"}
          leaderBoardText={"4123"}
          leaderBoardPercentage={"92%"}
        />
        <Percentage
          name={"HOORAIN KASHIF"}
          percentage={"80%"}
          number={"3"}
          leaderBoardText={"4123"}
          leaderBoardPercentage={"92%"}
        />
        <Percentage
          name={"ALINA HASSAN"}
          percentage={"80%"}
          number={"4"}
          leaderBoardText={"4123"}
          leaderBoardPercentage={"92%"}
        />
        <Percentage
          name={"MUHAMMAD HAMZA REHMAN"}
          percentage={"80%"}
          number={"5"}
          leaderBoardText={"4123"}
          leaderBoardPercentage={"92%"}
        />
        <Percentage
          name={"AFSHAN ARSHAD"}
          percentage={"80%"}
          number={"6"}
          leaderBoardText={"4123"}
          leaderBoardPercentage={"92%"}
        />
      </div>
    </div>
  );
};

export default Leaderboard;

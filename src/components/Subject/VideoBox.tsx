import { useRightFilter } from "@hooks/right-filter";
import { daysContent } from "@utils/Types";
import React from "react";
import ReactPlayer from "react-player";

const VideoBox: React.FC<{ data: daysContent }> = ({ data }) => {
  const { setVideoDuration } = useRightFilter();

  return (
    <>
      <div className="video-content py-2">
        <ReactPlayer
          url={data.link}
          width={"100%"}
          muted={false}
          controls
          onProgress={(progress) => setVideoDuration(progress.playedSeconds)}
        />
      </div>
    </>
  );
};

export default VideoBox;

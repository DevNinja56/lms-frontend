import { daysContent } from "@utils/Types";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoBox: React.FC<{ data: daysContent }> = ({ data }) => {
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);

  console.log(playedSeconds);

  return (
    <>
      <div className="video-content py-2">
        <ReactPlayer
          url={data.link}
          width={"100%"}
          muted={false}
          controls
          onProgress={(progress) => setPlayedSeconds(progress.playedSeconds)}
        />
      </div>
    </>
  );
};

export default VideoBox;

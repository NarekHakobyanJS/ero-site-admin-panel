import React from "react";
import UpdateVideos from "./UpdateVideos/UpdateVideos"
import Videos from "./Videos/Videos";
import "./Gif.scss";

const Video = () => {
    return(
        <div className="video">
            <Videos />
            <UpdateVideos />
        </div>
    )
};

export default Video;

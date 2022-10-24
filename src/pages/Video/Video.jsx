import React from "react";
import UpdateVideos from "./UpdateVideos/UpdateVideos"
import Videos from "./Videos/Videos";
import "./Video.scss"

const Video = () => {
    return(
        <div className="video">
            <Videos />
            <UpdateVideos />
            <UpdateVideos />
            <UpdateVideos />
        </div>
    )
};

export default Video;

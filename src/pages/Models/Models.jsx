import React from "react";
import UpdateVideos from "./UpdateVideos/UpdateVideos"
import Videos from "./Videos/Videos";
import "./Models.scss";

const Models = () => {
    return(
        <div className="video">
            <Videos />
            <UpdateVideos />
        </div>
    )
};

export default Models;

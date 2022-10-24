import React from "react";
import UpdateVideos from "./UpdateVideos/UpdateVideos"
import Videos from "./Videos/Videos";
import "./Parse.scss"

const Parse = () => {
    return(
        <div className="video">
            <Videos />
            <UpdateVideos />
        </div>
    )
};

export default Parse;

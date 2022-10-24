import React from "react";
import "./Videos.scss";
import plusVideo from "../../../assets/icon/videoPlusIcon.png";

const Videos = () => {
    return(
        <div className="create-video">
            <img src={plusVideo} />
        </div>   
    )
}

export default Videos;
import React from "react";
import "./UpdateVideos.scss";
import pitbul from "../../../assets/img/pitbul.jpg";
import updateIcon from "../../../assets/icon/updateIcon.png"
import deleteIcon from "../../../assets/icon/deleteIcon.png";
const UpdateVideos = () => {
    return(
        <div className="update-videos">
            <div className="update-videos-content">
                <div className="update-videos-imgMain">
                    <img src={pitbul} />
                </div>
                <div className="update-videos-btns">
                    <div className="update-videos-btns-open">
                        <img src={updateIcon} alt="update"/>
                    </div>
                    <div className="update-videos-btns-close">
                        <img src={deleteIcon} alt="delete"/>
                    </div>
                </div>
            </div>
            <div className="update-videos-title">
                <p>Calm Piano Music 24/7: study music, focus, think, meditation...</p>
            </div>
        </div>
    )
}

export default UpdateVideos;
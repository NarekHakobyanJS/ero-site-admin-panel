import React from "react";
import "./UpdateVideos.scss";
import jeylo from "../../../assets/img/jeylo.jpg";
import updateIcon from "../../../assets/icon/updateIcon.png"
import deleteIcon from "../../../assets/icon/deleteIcon.png";
const UpdateVideos = () => {
    return(
        <div className="update-videos">
            <div className="update-videos-content">
                <div className="update-videos-imgMain">
                    <img src={jeylo} />
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
                <h4>jenifer Lopes</h4>
                <h4 className="models-ru">Дженнифер Лопез</h4>
            </div>
        </div>
    )
}

export default UpdateVideos;
import React, {useState} from "react";
import "./UpdateVideos.scss";
import pitbul from "../../../assets/img/pitbul.jpg";
import updateIcon from "../../../assets/icon/updateIcon.png"
import deleteIcon from "../../../assets/icon/deleteIcon.png";
import DeleteVideos from "../DeleteVideos/DeleteVideos";

const UpdateVideos = () => {
    const [modalActive, setModalActive] = useState(false)
    return(
        <>
        <div className="update-videos">
            <div className="update-videos-content">
                <div className="update-videos-imgMain">
                    <img src={pitbul} />
                </div>
                <div className="update-videos-btns">
                    
                    <div className="update-videos-btns-close" onClick={() => setModalActive(true)}>
                        <img src={deleteIcon} alt="delete"/>
                    </div>
                </div>
            </div>
        </div>
        <DeleteVideos active={modalActive} setActive={setModalActive}/>
        </>
    )
}

export default UpdateVideos;
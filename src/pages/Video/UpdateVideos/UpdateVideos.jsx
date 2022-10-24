import React, {useState} from "react";
import "./UpdateVideos.scss";
import pitbul from "../../../assets/img/pitbul.jpg";
import updateIcon from "../../../assets/icon/updateIcon.png"
import deleteIcon from "../../../assets/icon/deleteIcon.png";
import DeleteVideos from "../DeleteVideos/DeleteVideos";
import Update from "../Update/Update";
import openBtn from "../../../assets/icon/openBtn.png";
import closeBtn from "../../../assets/icon/closeBtn.png";

const UpdateVideos = () => {
    const [modalActive, setModalActive] = useState(false)
    const [modalActiveOne, setModalActiveOne] = useState(false)
    const [openMobilePopup, setOpenMpilePopup] = useState(false)

    const mobilePopup = () => {
        setOpenMpilePopup(!openMobilePopup)
    }
    return(
        <>
        <div className="update-videos">
            <div className="update-videos-content">
                <div className="update-videos-imgMain">
                    <img src={pitbul} />
                </div>
                <div className={openMobilePopup ? "open" : "update-videos-btns"}>
                    <div className="update-videos-btns-open" onClick={() => setModalActiveOne(true)}>
                        <img src={updateIcon} alt="update"/>
                    </div>
                    <div className="update-videos-btns-close" onClick={() => setModalActive(true)}>
                        <img src={deleteIcon} alt="delete"/>
                    </div>
                </div>
                <div className="mobile-version" onClick={mobilePopup}>
                    <img src={openMobilePopup ? closeBtn : openBtn} alt="openBtn"/>
                </div>
            </div>
            <div className="update-videos-title">
                <p>Calm Piano Music 24/7: study music, focus, think, meditation...</p>
            </div>
        </div>
        <DeleteVideos active={modalActive} setActive={setModalActive}/>
        <Update active={modalActiveOne} setActive={setModalActiveOne}/>
        </>
    )
}

export default UpdateVideos;
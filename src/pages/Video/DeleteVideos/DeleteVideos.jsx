import React from 'react';
import './DeleteVideos.scss';


const DeleteVideos = ({active, setActive}) => {
    return (
        <div className={active ? "delete-videos active" : "delete-videos"} onClick={() => setActive(false)}>
            <div className="cover"></div>
            <div className="container" onClick={e => e.stopPropagation()}>
                <p>Do you want delete the video?</p>
                <div className='delete-videos-btns'>
                    <button>Yes</button>
                    <button className='delete-videos-no'>No</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteVideos;
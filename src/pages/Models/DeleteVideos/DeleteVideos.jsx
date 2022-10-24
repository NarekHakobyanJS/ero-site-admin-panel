import React from 'react';
import './DeleteVideos.scss';


const DeleteVideos = (props) => {
    return (
        <div className='delete-videos'>
            <div className="cover" onClick={props.closeRegistr}></div>
            <div className="container">
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
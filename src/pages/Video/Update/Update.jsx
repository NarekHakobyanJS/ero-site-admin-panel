import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Update.scss';
import plusIcon from "../../../assets/icon/plusIconTwo.png"

const Update = ({active, setActive}) => {
    return(
        <div className={active ? "update active" : "update"} onClick={() => setActive(false)}>
            <div className="cover"></div>
            <div className="container" onClick={e => e.stopPropagation()}>
                <div className="updateContainer">
                    <div className="updateContent">
                        
                        <img src={plusIcon} className="plusImg"/>
                
                    </div>
                    
                        <div className="updateEditor">
                
                        <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={ editor => {
                               
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </div>
                    
                </div>
                <button className="button">Submit</button>
            </div>
        </div>
        
    )
}

export default Update;
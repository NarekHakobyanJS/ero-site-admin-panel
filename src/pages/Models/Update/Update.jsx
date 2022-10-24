import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import style from "./Update.module.css";
import plusIcon from "../../../assets/icon/plusIconTwo.png"

const Update = (props) => {
    return(
        <div className={style.login}>
            <div className={style.cover} onClick={props.closePopup}></div>
            <div className={style.container}>
                <div className={style.updateContainer}>
                    <div className={style.updateContent}>
                        
                        <img src={plusIcon} className={style.plusImg}/>
                
                    </div>
                    <div className={style.updateEditor}>
                
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
                <button>Submit</button>
            </div>
        </div>
        
    )
}

export default Update;
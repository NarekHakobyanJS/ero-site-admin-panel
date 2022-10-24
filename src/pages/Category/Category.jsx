import React from "react";
import "./Category.scss";
import plusIcon from "../../assets/icon/categoryPlusIcon.png";
import arrow from "../../assets/icon/arrow.png";
import openArrow from "../../assets/icon/openArrow.png";
import deleteIcon from "../../assets/icon/deleteIcon.png";
import { useState } from "react";
import CategoryOpen from "./CategoryOpen/CategoryOpen";

const Category = () => {
    const [popupCategory, setPopupCategory] = useState(false)
    const showHideCategory = () => {
        setPopupCategory(!popupCategory)
    }
    return(
        <div className="category">
            <div className="create-category">
                <img src={plusIcon} alt="plusCategory"/>
            </div>
        <div className="category-content">
            <div className="update-category">
                <div className="update-category-title"><h4>Category 1</h4></div>
                <div className="update-category-arrow" onClick={showHideCategory}><img src={popupCategory ? openArrow : arrow} /></div>
            </div>

            <div className="delete-category">
                <img src={deleteIcon} />
            </div>
        </div>
        <div>
            {popupCategory ? <CategoryOpen /> : ""}
        </div>
        </div>
    )
}

export default Category;
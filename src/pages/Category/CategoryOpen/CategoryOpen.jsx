import React from "react";
import "./CategoryOpen.scss";

const CategoryOpen = () => {
    return(
        <div className="category-open">
            <from className="category-form">
                <h5>Rusian</h5>
                <input type="text" className="input-category" placeholder="Catrgory"/>
            </from>
            <from className="category-form">
                <h5>Rusian</h5>
                <input type="text" className="input-category" placeholder="Catrgory"/>
            </from>
            <from className="category-form">
                <h5>Rusian</h5>
                <input type="text" className="input-category" placeholder="Catrgory"/>
            </from>
            <button>Submit</button>
        </div>
    )
}

export default CategoryOpen
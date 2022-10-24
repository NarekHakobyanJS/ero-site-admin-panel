import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarBtn.scss";

const NavbarBtn = ({title, icon, pathName}) => {

    return(
        <div className="nav-bar-btn">
            <NavLink to={pathName}>
                <div>
                    <img src={icon} alt="icon"/>
                    <p>{title}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default NavbarBtn;
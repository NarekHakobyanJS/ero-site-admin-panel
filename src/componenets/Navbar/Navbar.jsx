import React, {useState} from "react";
import "./Navbar.scss";
import logo from "../../assets/logo/logoMain.png"
import NavbarBtn from "../NavbarBtn/NavbarBtn";
import video from "../../assets/icon/1.png";
import category from "../../assets/icon/2.png";
import parse from "../../assets/icon/3.png";
import models from "../../assets/icon/4.png";
import gif from "../../assets/icon/5.png"; 
import burger from "../../assets/icon/burger.png";
import mobileLogo from "../../assets/icon/logoPu.png";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const openBurgerMenu = () => {
        setOpenMenu(!openMenu)
    }
    const navBarData = [
        {id : 1, title : "Videos", icon : video, pathName : "/video"},
        {id : 2, title : "Category", icon : category, pathName : "/category"},
        {id : 3, title : "Parse", icon : parse, pathName : "/parse"},
        {id : 4, title : "Models", icon : models, pathName : "/models"},
        {id : 5, title : "Gif", icon : gif, pathName : "/gif"},
    ]

    return (
        <div className="nav">
        <div className="burger-menu">
            <div className="burger-item">
                <img src={burger} alt="burger" className="burger" onClick={openBurgerMenu}/>
                <img src={mobileLogo} alt="mobileLogo" />
            </div>
        </div>
        
        <div className={openMenu ? "active" : "navbar-container"}>
            <div className="navbar-header">
                <img src={logo} />
            </div>
            <div>
            {navBarData.map(el => <NavbarBtn key={el.id} title={el.title} icon={el.icon} pathName={el.pathName}/>)}
            </div>
            
        </div>
        </div>
    )
}

export default Navbar;
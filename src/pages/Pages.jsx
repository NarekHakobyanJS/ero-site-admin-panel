import React from "react";
import "./Pages.scss";
import Video from "./Video/Video";
import Category from "./Category/Category";
import Parse from "./Parse/Parse";
import Models from "./Models/Models";
import Gif from "./Gif/Gif";
import {Routes, Route} from "react-router-dom";


const Pages = () => {
    return (
        <div className="pages">
                <Routes>
                    <Route path="/video" element={<Video />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/parse" element={<Parse />} />
                    <Route path="/models" element={<Models />} />
                    <Route path="/gif" element={<Gif />} />
                </Routes>
        </div>
    )
}

export default Pages;
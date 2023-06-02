import React from "react";
import {Routes, Route} from "react-router-dom";
import List from "../pages/List";

function RouterD(){
    return(
        <Routes>
            <Route path="/" element={<List />} />
        </Routes>
    )
}

export default RouterD
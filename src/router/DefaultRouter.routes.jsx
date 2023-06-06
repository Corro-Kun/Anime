import React from "react";
import {Routes, Route} from "react-router-dom";
import List from "../pages/List";
import Details from "../pages/detals";

function RouterD(){
    return(
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}

export default RouterD
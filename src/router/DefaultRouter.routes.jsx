import React from "react";
import {Routes, Route} from "react-router-dom";
import List from "../pages/List";
import Details from "../pages/detals";
import ListPage from "../pages/List_Page";

function RouterD(){
    return(
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/page/:pag" element={<ListPage />} />
        </Routes>
    )
}

export default RouterD
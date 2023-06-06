import React from "react";
import "../styles/file.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function File({Title, SRC, ID}){

    const Navegate = useNavigate();

    function NavDetails(id){
        Navegate("/details/" + id);
    }

    return(
        <div className="file" onClick={() => NavDetails(ID)} >
            <h2>{Title}</h2>
            <img src={SRC} />
        </div>
    )
}

export default File
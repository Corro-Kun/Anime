import React from "react";
import "../styles/next.css"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Next(){

    const Navegate = useNavigate();

    function SetPage(){
        Navegate('/page/' + 2)
    }

    return(
        <div className="Next">
            <button onClick={() => SetPage()} >Next</button>
        </div>
    )
}

export default Next
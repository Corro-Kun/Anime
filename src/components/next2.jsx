import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/next.css"

function Next2({Page}){

    const Navigate = useNavigate();

    function SetPag(){
        Navigate('/page/' + Page);
        window.location.reload();
    }
    return(
        <div className="Next">
            <button onClick={() => SetPag()} >Next</button>
        </div>
    )
}

export default Next2
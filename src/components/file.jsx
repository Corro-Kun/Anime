import React from "react";
import "../styles/file.css"

function File({Title, SRC}){
    return(
        <div className="file">
            <h2>{Title}</h2>
            <img src={SRC} />
        </div>
    )
}

export default File
import React from "react";
import File from "./file.jsx";
import {GetContext} from "../context/Context.jsx"
import "../styles/contener.css"

function Contener(){

    const {Api} = GetContext();

    return(
        <div className="Contener">
            {

                Api.map(Api =>{
                    return(
                        <File Title={Api.title} SRC={Api.images.jpg.large_image_url} key={Api.mal_id} />
                    )
                })

            }
        </div>
    )
}

export default Contener
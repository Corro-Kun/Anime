import React,{useState, useEffect} from "react";
import File from "./file";
import { PassPage } from "../api";
import "../styles/contener.css"

function Contener2({Page}){

    const [Api, setApi] = useState([]);

    async function get(){
        setApi( await PassPage(Page));
    }

    useEffect(()=>{
        get();
    },[])

    return(
        <div className="Contener">
            {
                Api.length > 0 ? (
                    Api.map(Api => (
                        <File
                            Title={Api.title}
                            SRC={Api.images.jpg.large_image_url}
                            key={Api.mal_id}
                            ID={Api.mal_id}
                        />
                ))
                ) : (
                    <div style={{textAlign: "center"}}>
                        <h2>Loading...</h2>
                    </div>
                )                
            }
        </div>
    );
}

export default Contener2
/*

Api.map(Api =>{
                    return(
                        <File Title={Api.title} SRC={Api.images.jpg.large_image_url} key={Api.mal_id} ID={Api.mal_id} />
                    )
                })

                */
import React from "react";
import Navigation from "../components/navigation";
import { GetAnime } from "../api";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detals.css"

function Details(){

    const [Data, setData] = useState({});

    const {id} = useParams();

    async function GetData(){
        setData(await GetAnime(id));
    } 

    useEffect(()=>{
        GetData();
    },[])

    return(
        <>
         <Navigation />
         <div className="Data">
            <div className="Title">
                <h2>{Data.title}</h2>
                <h2>{Data.title_japanese}</h2>
            </div>
            <div className="Images">
                <img src={Data.images?.jpg?.large_image_url} alt="" />
            </div>
            <div className="Synopsis">
                <p>{Data.synopsis}</p>
            </div>
            <div className="Stast">
                <h2>type</h2>
                <h4>{Data.type}</h4>
                <h2>Episodes</h2>
                <h4>{Data.episodes}</h4>                      
                <h2>Status</h2>
                <h4>{Data.status}</h4>
            </div>
         </div>
        </>
    )
}

export default Details
import React,{useContext, createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { GetData,PassPage } from "../api.js"

const Newcontext = createContext();

export function GetContext(){
    const context = useContext(Newcontext);
    return context
}

export function Context({children}){

    const [Api, setApi] = useState([]);

    async function get(){
        setApi(await GetData());
    }

    useEffect(()=>{
        get();
    }, [])

    return(
        <Newcontext.Provider value={{Api}} >
            {children}
        </Newcontext.Provider>
    )
}

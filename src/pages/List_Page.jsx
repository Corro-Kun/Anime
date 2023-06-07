import React,{useState, useEffect} from "react";
import Navigation from "../components/navigation";
import Contener2 from "../components/contener2";
import { useParams } from "react-router-dom";
import Next2 from "../components/next2.jsx";

function ListPage(){

    const {pag} = useParams();

    const [Number, setNumber] = useState(2);

    useEffect(()=>{
        const A = parseInt(pag)
        setNumber(A + 1);
    },[])

    return(
        <>
            <Navigation />
            <Contener2 Page={pag} />
            <Next2 Page={Number} />
        </>
    )
}

export default ListPage
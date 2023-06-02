import React from "react";
import { Context } from "./context/Context.jsx";
import Router from "./router/DefaultRouter.routes";

function App(){
    return(
        <Context>
            <Router />
        </Context>
    )
}

export default App
import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import EmpresasQueConfiaram from "./Empresas";

export default function All() {
    return (
        <>
            <Home />    
                <EmpresasQueConfiaram />
                <Projects />
        </>
    )
}
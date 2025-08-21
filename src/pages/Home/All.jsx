import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import EmpresasQueConfiaram from "./Empresas";
import Beneficios from "./Beneficios";

export default function All() {
    return (
        <>
            <Home />    
                <EmpresasQueConfiaram />
                    <Beneficios />
                <Projects />
        </>
    )
}
import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import EmpresasQueConfiaram from "./Empresas";
import Beneficios from "./Beneficios";
import ComoFunciona from "./ComoFunciona";

export default function All() {
    return (
        <>
            <Home />    
                <EmpresasQueConfiaram />
                    <Beneficios />
                        <ComoFunciona />
                <Projects />
        </>
    )
}
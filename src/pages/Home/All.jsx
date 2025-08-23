import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import EmpresasQueConfiaram from "./Companies";
import Beneficios from "./Benefits";
import ComoFunciona from "./Trajectory";

export default function All() {
    return (
        <>
            <Home />    
                <EmpresasQueConfiaram />
                    <Beneficios />
                        {/* <ComoFunciona /> */}
                            
                            <Projects />
        </>
    )
}
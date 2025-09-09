import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import EmpresasQueConfiaram from "./Companies";
import Beneficios from "./Benefits";
import Services from "./Services";
import Automation from "./Automation";
import FAQ from "./FAQ";

export default function All() {
    return (
        <>
            <Home />    
                <EmpresasQueConfiaram />
                    <Beneficios />
                        {/* <ComoFunciona /> */}   
                            <Projects />   
                                <Services />   
                                    <Automation />
                                        <FAQ />
        </> 
    )
}
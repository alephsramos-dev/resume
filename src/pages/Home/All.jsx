import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import EmpresasQueConfiaram from "./Companies";
import Services from "./Services";
import Automation from "./Automation";
import FAQ from "./FAQ";
import Benefits from "./Benefits";

export default function All() {
    return (
        <>
            <Home />    
                <EmpresasQueConfiaram />    
                    <Benefits />
                        {/* <ComoFunciona /> */}   
                            <Projects />   
                                <Services />   
                                    <Automation />
                                        <FAQ />
        </> 
    )
}
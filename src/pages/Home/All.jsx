import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Automation from "./Automation";
import FAQ from "./FAQ";
import Benefits from "./Benefits";
import Companies from "./Companies";

export default function All() {
    return (
        <>
            <Home />    
                <Companies />    
                    <Benefits />
                        {/* <ComoFunciona /> */}   
                            <Projects />   
                                {/* <Services />    Seção inativa até que seja definido os banners do bento grid */}
                                    <Automation />
                                        <FAQ />
        </> 
    )
}
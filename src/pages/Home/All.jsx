import React from "react";
import Stacks from "./Stacks";
import Projects from "./Projects";
import Home from "./Home";

export default function All() {
    return (
        <>
            <Home />
            <Projects />
            <Stacks />
        </>
    )
}
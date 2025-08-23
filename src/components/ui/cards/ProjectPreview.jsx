import React from "react";
import styled from "styled-components";

const Card = styled.div`

`

const Techs = styled.aside`

`

const Lista = styled.ol`

`

const Buttons = styled.div`

`

export default function ProjectPreview ({
    title,
    description
}) {
    return (
        <>
            <Card>
                <img src="" alt="" loading="lazy"/>
                <h2>{title}Project Title</h2>
                <p>{description}Descrição do title, curta e objetiva</p>
                <hr />
                <Techs>
                    <span>Tecnologias usadas</span>
                    <div>
                        <span>Grau de dificuldade</span>
                    </div>
                </Techs>
                <Lista>
                    <li><span>Tecnologia 1</span></li>
                    <li><span>Tecnologia 2</span></li>
                    <li><span>Tecnologia 3</span></li>
                </Lista>
                <hr />
                <Buttons>
                    <button>
                        Conhecer mais
                    </button>
                    <button>
                        Visitar website
                    </button>
                </Buttons>
            </Card>
        </>
    )
}
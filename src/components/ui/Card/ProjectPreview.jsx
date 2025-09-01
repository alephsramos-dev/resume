import React from "react";
import styled from "styled-components";
import {
  MdOutlineSignalCellularAlt,       // Ícone com 3 barras
  MdOutlineSignalCellularAlt1Bar,  // Ícone com 1 barra
  MdOutlineSignalCellularAlt2Bar   // Ícone com 2 barras
} from 'react-icons/md';
import { IoAlert } from "react-icons/io5";
import { techIcons } from "@/db/TechIcons";
import Technology from "../Badge/Technology";
import { BsBoxArrowUpRight } from "react-icons/bs";


const Card = styled.div`
    max-width: 400px;
    background-color: #1d1d1b;
    box-shadow: inset 0 0 0 0.1px #f1f1f1;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: auto;
    border-radius: 15px;
`

const Image = styled.div`
    width: 100%;
    position: relative;
    
    & img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        height: 200px;
        border-radius: 15px 15px 0 0;
    }

    & span {
        position: absolute;
        top: 15px;
        left: 15px;
        box-shadow: inset 0 0 0 0.5px #f1f1f1;
        background-color: #1d1d1b60;
        backdrop-filter: blur(2px);
        color: #fbfbfb;
        padding: 6px 12px;
        text-transform: uppercase;
        font-size: 12px;
        border-radius: 7.5px;
        font-weight: 500;
    }
`

const Text = styled.div`
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    box-shadow: inset 0 -0.5px 0 0 #f1f1f120;

    & h2 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: -7.5px;
    }

    & p {
        font-size: 14px;
        color: #a0a0a0;
        line-height: 1.3;
        font-weight: 400;
    }

    & div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        align-items: center;
        gap: 7.5px;

        & img {
            width: 25px;
            height: 25px;
            background: #f1f1f1;
            border-radius: 50%;
            border: 1px solid #fff;
            object-fit: cover;
            object-position: center;
        }

        & span {
            font-size: 14px;
            font-weight: 500;
            color: #a0a0a0;
        }
    }
`

const Techs = styled.aside`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & span {
        font-size: 14px;
        font-weight: 300;
    }
`

const Lista = styled.ol`
    padding: 0 15px 15px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
    box-shadow: inset 0 -0.5px 0 0 #f1f1f120;
`

const Buttons = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & button {
        color: #fff;
        cursor: pointer;

        &:nth-child(1){
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            overflow: hidden;

            &:hover svg {
                color: #fff;
                background-color: #ffffff30;
                scale: 0.95;
            }

            &:hover span{
                transform: translateX(0);
                opacity: 1;
            }

            & svg {
                font-size: 18px;
                padding: 7.5px;
                border-radius: 5px;
                color: #ffffff90;
                background-color: #ffffff10;
                width: 35px;
                transition: all 0.3s ease-in-out;
                height: 35px;
            }

            & span {
                transform: translateX(-10px);
                opacity: 0;
                background-color: #ffffff10;
                padding: 5px 10px;
                font-size: 14px;
                color: #ffffff90;
                border-radius: 5px;
                transition: all 0.3s ease-in-out;
            }
        }

        &:nth-child(2){
            padding: 10px 15px;
            border-radius: 7.5px;
            background-color: #ffffff15;
            box-shadow: inset 0 0 0 1px #ffffff10;
            color: #ffffff90;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            flex-direction: row-reverse;

            & svg {
                font-size: 14px;
            }
        }
    }
`

const DifficultyContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.color || '#333'};

   & span {
        font-size: 10px;
        line-height: 1;
        text-transform: uppercase;
        font-weight: 400;
    }  
`;

const IconStack = styled.div`
  position: relative; /* Essencial para a sobreposição */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Estiliza o ícone de fundo diretamente */
  .icon-background {
    color: #323232; /* Cor cinza para as barras inativas */
  }

  /* Estiliza o ícone da frente que fica por cima */
  .icon-foreground {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const difficultyLevels = {
  1: {
    label: 'Básico',
    color: '#fff', // Verde
    Icon: MdOutlineSignalCellularAlt1Bar,
  },
  2: {
    label: 'Intermediário',
    color: '#fff', // Laranja
    Icon: MdOutlineSignalCellularAlt2Bar,
  },
  3: {
    label: 'Avançado',
    color: '#fff', // Vermelho
    Icon: MdOutlineSignalCellularAlt,
  },
};

const textToLevel = {
  'easy': 1,
  'intermediate': 2,
  'difficult': 3,
};

export default function ProjectPreview ({
    title,
    description,
    difficultyText,
    qualityText,
    companyName,
    companyLogo,
    projectImage,
    
}) {

    const level = textToLevel[difficultyText?.toLowerCase()] || 2;
    const { label, color, Icon } = difficultyLevels[level];

    return (
        <>
            <Card>
                <Image>
                    <img src={projectImage} alt={title} loading="lazy"/>
                    <span>{qualityText}Mais recente</span>  
                </Image>
                <Text>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div>
                        <img src={companyLogo} alt={companyName} />
                        <span>{companyName}Unity Company</span>
                    </div>
                </Text>
                <Techs>
                    <span>Tecnologias usadas</span>
                    <DifficultyContainer color={color}>
                        <span>{label}</span>
                        <IconStack>
                            <MdOutlineSignalCellularAlt className="icon-background" size={14} />
                            <Icon className="icon-foreground" size={14} style={{ color: color }} />
                        </IconStack>
                    </DifficultyContainer>
                </Techs>
                <Lista>
                    <li>
                        <Technology 
                            techSrc={techIcons.react}
                            nameTech="React"
                        />
                    </li>
                    <li>
                        <Technology 
                            techSrc={techIcons.javascript}
                            nameTech="JavaScript"
                        />
                    </li>
                    <li>
                        <Technology 
                            techSrc={techIcons.html}
                            nameTech="HTML5"
                        />
                    </li>
                </Lista>
                <hr />
                <Buttons>
                    <button>
                        <IoAlert />
                        <span>Conhecer mais</span>
                    </button>
                    <button>
                        <BsBoxArrowUpRight />
                        Visitar website
                    </button>
                </Buttons>
            </Card>
        </>
    )
}
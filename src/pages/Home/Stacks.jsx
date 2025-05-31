import Badge from "@/components/ui/Badge";
import Description from "@/components/ui/Description";
import Stack from "@/components/ui/Stack";
import Title from "@/components/ui/Title";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { stacks } from "@/pages/Home/Data/stacksData";
import { RiStackLine } from "react-icons/ri";

const Content = styled.main`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
    background-color: #000;
`

const Texts = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    width: 50%;
`

function splitStacks(stacks, layout) {
    let result = [];
    let idx = 0;
    for (let count of layout) {
        result.push(stacks.slice(idx, idx + count));
        idx += count;
    }
    return result;
}

const layout = [4, 5, 6, 5, 4]; // Quantidade de itens por coluna
const columns = splitStacks(stacks, layout);

const ColumnsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 50%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export default function Stacks() {
    const [visible, setVisible] = useState(Array(stacks.length).fill(false));
    const totalStacks = stacks.length;
    const maxDuration = 1200; // 1.2 segundos para tudo aparecer
    const batchSize = Math.ceil(totalStacks / 8); // quantos aparecem por vez
    const interval = Math.floor(maxDuration / (totalStacks / batchSize));

    useEffect(() => {
        let shown = visible.filter(Boolean).length;
        if (shown >= totalStacks) return;
        const timeout = setTimeout(() => {
            // pega índices ainda não visíveis
            const hiddenIdxs = visible
                .map((v, i) => (!v ? i : null))
                .filter(i => i !== null);
            // escolhe aleatoriamente um batch
            const toShow = [];
            for (let i = 0; i < Math.min(batchSize, hiddenIdxs.length); i++) {
                const rand = Math.floor(Math.random() * hiddenIdxs.length);
                toShow.push(hiddenIdxs[rand]);
                hiddenIdxs.splice(rand, 1);
            }
            // atualiza estado
            setVisible(prev => prev.map((v, i) => v || toShow.includes(i)));
        }, interval);
        return () => clearTimeout(timeout);
    }, [visible, totalStacks, batchSize, interval]);

    let shown = 0;
    return (
        <>
            <Content>
                <Texts>
                    <Badge 
                        texto="Stacks" 
                        icon={<RiStackLine />} 
                        txtcolor="#d102e4" 
                        color="#5a008430" 
                    />
                    <Title 
                        titulo="Conheça as stacks que utilizamos" 
                        color="#fff" 
                    />
                    <Description 
                    descricao="As stacks são conjuntos de tecnologias que utilizamos para desenvolver nossos projetos. Elas são escolhidas com base na eficiência, escalabilidade e facilidade de manutenção. Aqui estão algumas das stacks que utilizamos:" 
                    color="#ffffff60"
                    />
                </Texts>
                <ColumnsContainer>
                    {columns.map((col, colIdx) => (
                        <Column key={colIdx}>
                            {col.map((stack, idx) => {
                                const globalIdx = columns.slice(0, colIdx).reduce((a, c) => a + c.length, 0) + idx;
                                shown++;
                                return (
                                    <div
                                        key={stack.name + idx}
                                        style={{
                                            opacity: visible[globalIdx] ? 1 : 0,
                                            filter: visible[globalIdx] ? 'blur(0px)' : 'blur(8px)',
                                            transform: visible[globalIdx]
                                                ? 'scale(1) translateY(0)'
                                                : 'scale(0.7) translateY(40px)',
                                            transition: 'opacity 0.7s cubic-bezier(.68,-0.55,.27,1.55), filter 0.7s cubic-bezier(.68,-0.55,.27,1.55), transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
                                            willChange: 'opacity, filter, transform',
                                        }}
                                    >
                                        <Stack
                                            icon={stack.icon}
                                            name={stack.name}
                                            color={stack.color}
                                            aprender={stack.aprender}
                                        />
                                    </div>
                                );
                            })}
                        </Column>
                    ))}
                </ColumnsContainer>
            </Content>
        </>
    );
}
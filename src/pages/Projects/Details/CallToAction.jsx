import styled, { keyframes } from "styled-components";
// import { useMemo } from "react";
// import projects from "@/database/ProjectData";
import Title from "@/components/ui/texts/Title";
import ContactFormModal from "@/components/ui/Modal/ContactFormModal";
import { ArrowRightIcon, ArrowUpIcon, ArrowUpRightIcon, AsteriskIcon, GiftIcon } from "@phosphor-icons/react/dist/ssr";
import { rgba } from "polished";

const gradientFlow = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const Container = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    position: fixed;
    right: 0%;
    bottom: 18px;
    z-index: 9999;
    transform: translateX(-50%);

    & .title {
        font-size: 22px;
        color: ${(props) => props.theme.colors.white[200]};

        @media (max-width: 768px){
            font-size: 18px;
        }
    }

    @media (max-width: 768px){
        flex-direction: row;
        right: 0%;
        gap: 18px;
        padding: 6px;
        border-radius: 20px;
    }

    & h1 {
        @media (max-width: 768px){
            font-size: 20px;
            width: auto;
        }
    }

    & button {
        padding: 12px 16px;
        background-color: ${(props) => rgba(props.theme.colors.black[200], 0.3)};
        border: 1px solid ${(props) => rgba(props.theme.colors.black[500], 0.2)};
        backdrop-filter: blur(12px);
        color: ${(props) => props.theme.colors.white[100]};
        font-weight: 500;
        border-radius: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        white-space: nowrap;

        & svg {
            width: 22px;
            height: 22px;
            color: ${(props) => props.theme.colors.white[100]};
        }

        @media (max-width: 768px){
            padding: 10px;
        }
    }
`

export default function ProjectDetailsCallToAction() {

    // const currentProject = useMemo(() => {
    //     return projects.find(project => project.slug === slug);
    // }, [slug]);

    return (
        <>
            <Container>
                <ContactFormModal
                    source="Projects CTA"
                    trigger={({ onClick }) => (
                        <button type="button" onClick={onClick}>
                            Entrar em contato <ArrowUpRightIcon />
                        </button>
                    )}
                />
            </Container>
        </>
    )
}
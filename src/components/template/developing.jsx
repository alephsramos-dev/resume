import { SpinnerBallIcon, SpinnerIcon } from "@phosphor-icons/react/dist/ssr";
import { IconLoader } from "@tabler/icons-react";
import styled, {keyframes} from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);  
    }
`

const Spinner = styled.span`
    animation: ${spin} 2s linear infinite;
`

export default function Developing() {
    return <main style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#000',
    }}>
        <Spinner>
            <SpinnerIcon color="#fff" size={38}/>
        </Spinner>
        <h1
            style={{
                fontSize: '24px',
                textAlign: 'center',
                width: '80%',
                color: '#fff',
                fontWeight: '400',
                lineHeight: '1.2',
            }}
        >Está página está em desenvolvimento, em breve estará disponivel</h1>
    </main>
}
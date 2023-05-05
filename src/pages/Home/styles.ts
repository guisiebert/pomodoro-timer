import styled from "styled-components";

export const HomeContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 3.5rem;
    }

`





const BaseButton = styled.button`
    width: 100%;
    border: none;
    padding: 1rem;
    /* height: 4rem; */
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
    font-weight: bold;
    cursor: pointer;


    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme['gray-100']};

    transition: background-color 0.1s;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    &:not(:disabled):hover {
        background-color: ${props => props.theme['green-700']};

    }
 
`;

export const StartButton = styled(BaseButton)`

`

export const PauseButton = styled(BaseButton)`
    background-color: ${props => props.theme['red-500']};
    box-shadow: none;

    &:not(:disabled):hover {
        background-color: ${props => props.theme['red-700']};
    }

    
`
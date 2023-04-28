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


export const FormContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme[`gray-100`]};
        font-size: 1.125rem;
        font-weight: bold;
        flex-wrap: wrap;
`

export const TaskInput = styled.input`
    background-color: transparent;
    height: 2.5rem;
    border: none;
    border-bottom: 2px solid ${props => props.theme['green-500']};
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: white;


    flex: 1;

    &:focus {
        box-shadow: none;
    }
`


export const MinutesAmount = styled.input`
    background-color: transparent;
    height: 2.5rem;
    border: none;
    border-bottom: 2px solid ${props => props.theme['green-500']};
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: white;

    width: 4rem;

    &:focus {
        box-shadow: none;
    }
`

export const CountdownContainer = styled.div`
    
    display: flex;
    justify-content: center;
    gap: 1rem;

    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme['gray-100']};
    
    span {
        background-color: ${props => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;
    }

    p {
        padding: 2rem 0rem;
        border-radius: 8px;
        
        font-weight: 800;
        color: ${props => props.theme['green-500']};

        width: 4rem;
        overflow: hidden;
        display: flex;

        align-items: center;
        justify-content: center;
    }
    
`


export const StartButton = styled.button`
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
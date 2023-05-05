import styled from "styled-components"

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
    border-bottom: 2px solid ${props => props.theme['gray-400']};
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: white;

    
    
    flex: 1;
    
    &:focus {
        box-shadow: none;
        border-bottom: 2px solid ${props => props.theme['green-500']};
    }

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    `


export const MinutesAmount = styled.input`
    background-color: transparent;
    height: 2.5rem;
    border: none;
    border-bottom: 2px solid ${props => props.theme['gray-400']};
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: white;
    
    width: 4rem;
    
    &:focus {
        border-bottom: 2px solid ${props => props.theme['green-500']};
        box-shadow: none;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`

import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 3.5rem;

    display: flex;
    flex-direction: column;

    /* gap: 2rem; */

    h1 {
        font-size: 1.5rem;
        color: ${props => props.theme["gray-100"]};
    }

`


export const HistoryList = styled.div`
    flex: 1;
    overflow: auto; // Gera uma barra de rolagem caso o tamanho de uma div seja maior que o container disponível.
    margin-top: 2rem;
    /* max-height: ??; */

    table {
        width: 100%;
        border-collapse: collapse; // faz as bordas de duas células adjacentes se tornarem uma só
        min-width: 600px; // é o que força o "scroll" quando a tela ficar muito pequena

        
        th {
            background-color: ${props => props.theme['gray-600']};
            padding: 1rem;
            text-align: left; // por padrão é center
            color: ${props => props.theme["gray-100"]};
            font-size: 0.875rem;
            line-height: 1.6rem;

            &:first-child { // seleciona a primeira th
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child { // seleciona a última th
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }

        }
        
        td {
            background-color: ${props => props.theme['gray-700']};
            padding: 1rem 1.5rem;
            margin: 0.25rem;
            line-height: 1.6rem;

            border-top: 4px solid ${props => props.theme["gray-800"]};

            font-size: 0.875rem;
            line-height: 1.6rem;

            &:first-child {
                width: 50%; // faz a primeira coluna ter largura maior
            }

            &:last-child {
                width: 20%;
            }
        }
    }
`

const STATUS_COLORS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500'
} as const

interface StatusProps {
    statusColor: 'yellow' | 'red' | 'green'
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`
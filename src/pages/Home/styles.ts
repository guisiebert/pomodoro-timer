import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    height: 100%;

    .upperForm {
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }

    input {
        padding: 0.5rem;
        margin: 1rem;
        color: white;
        background-color: transparent;
        border: none;
        border-bottom: #00875F 2px solid;
    }

    .minutes {
        /* display: flex; */
        align-items: center;
        width: 4.5rem;
    }

    .counter {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 3.75rem;
        
        span {
            background-color: #29292E;
            padding: 2.5rem 1rem;
            border-radius: 8px;
            
            font-size: 10rem;
        }

        p {
            padding: 2.5rem 1rem;
            border-radius: 8px;
            
            font-size: 10rem;
            font-weight: 800;
            color: #00875F;
        }
    }

    button {
        margin-top: 3.5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 4rem;
        border-radius: 8px;
        
        background-color: #00875F;
        color: white;

        border: none;
    }

`
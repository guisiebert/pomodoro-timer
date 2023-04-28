import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmount, StartButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">

                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" placeholder="Dê um nome para o seu projeto"/>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmount type="number" id="minutesAmount" placeholder="00" className="minutes"/>

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <p>:</p>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>


                <StartButton type="submit">
                    <Play size={24}/>
                    Começar
                </StartButton>
            
            </form>

        </HomeContainer>
    )
}
import { Play } from "phosphor-react";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">

                <div className="upperForm">
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input id="task" placeholder="Dê um nome para o seu projeto"/>

                    <label htmlFor="minutesAmount">durante</label>
                    <input type="number" id="minutesAmount" placeholder="00" className="minutes"/>

                    <span>minutos.</span>
                </div>

                <div className="counter">
                    <span>0</span>
                    <span>0</span>
                    <p>:</p>
                    <span>0</span>
                    <span>0</span>
                </div>

                <button type="submit">
                    <Play size={24}/>
                    Começar
                </button>
            
            </form>

        </HomeContainer>
    )
}
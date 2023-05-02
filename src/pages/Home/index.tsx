import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmount, StartButton, TaskInput } from "./styles";

export function Home() {
    return (
      <HomeContainer>
        <form action="">
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>


            <TaskInput 
                id="task" 
                list="project-suggestions" 
                placeholder="Dê um nome para o seu projeto" 
            />

            <datalist id="project-suggestions">
              <option value="Projeto 1" />
              <option value="Projeto 2" />
              <option value="Projeto 3" />
              <option value="Projeto 4" />
              <option value="Projeto 5" />
              <option value="Projeto Banana" />
              <option value="Banana Verdew" />
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmount
              type="number"
              id="minutesAmount"
              placeholder="00"
              step={5}
              min={5}
              max={90}
              // className="minutes"
            />

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
            <Play size={24} />
            Começar
          </StartButton>
        </form>
      </HomeContainer>
    );
}
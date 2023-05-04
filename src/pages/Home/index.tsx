import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmount, StartButton, TaskInput } from "./styles";
import { useForm, useWatch } from 'react-hook-form'
import { useState } from "react";

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecsPassed, setAmountSecsPassed] = useState(0)
  
  const { register, handleSubmit, watch, reset }  = useForm<NewCycleFormData>()

    // setAmountSecsPassed(prev => prev + 1),
    
  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount
    }

    setCycles(prev => [...prev, newCycle])
    setActiveCycleId(newCycle.id)
 
    reset()
  }

  const activeCycle = cycles.find(item => item.id == activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task



    return (
      <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>


            <TaskInput 
                id="task" 
                list="project-suggestions" 
                placeholder="Dê um nome para o seu projeto"
                {...register('task')}
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
              {...register('minutesAmount', {valueAsNumber: true})}
            />

            <span>minutos.</span>
          </FormContainer>

          <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <p>:</p>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
          </CountdownContainer>

          <StartButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartButton>
        </form>
      </HomeContainer>
    );
}
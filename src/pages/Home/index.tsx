import { Pause, Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmount, PauseButton, StartButton, TaskInput } from "./styles";
import { useForm, useWatch } from 'react-hook-form'
import { useEffect, useState } from "react";
import { differenceInSeconds } from 'date-fns'
import { NewCycleCountdown } from "./components/NewCycleCountdown";
import { Countdown } from "./components/Countdown";



interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  
  const activeCycle = cycles.find(item => item.id == activeCycleId)
  
  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }
    
    setCycles(prev => [...prev, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecsPassed(0)
    
    reset()
  }
  
  function handleInterruptCycle() {
    
    setCycles(
      cycles.map( cycle => {
        if (cycle.id == activeCycleId) {
          return {...cycle, interruptedDate: new Date()}
        } else {
          return cycle
        }
      })
    )
      
    setActiveCycleId(null)
    console.log(cycles)
  }


  
  const currentSeconds = activeCycle ? totalSeconds - amountSecsPassed : 0
  
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')
  
  const task = watch('task')
  const isSubmitDisabled = !task
  
  // Altera title da página
  useEffect(() => {
    if (activeCycle) {
      document.title = `Timer: ${minutes}:${seconds} `
    }
  }, [minutes, seconds, activeCycle])
  
  
  return (
    <HomeContainer>
        <form onSubmit={handleSubmit(handleCreateNewCycle)}>
          <NewCycleCountdown/>
          <Countdown 
            activeCycle={activeCycle}
            setCycles={setCycles}
            activeCycleId={activeCycleId}
          />


          {activeCycle ? (
          <PauseButton 
            type="button"
            onClick={handleInterruptCycle}
          >
            <Pause size={24} />
            Interromper
          </PauseButton>

          ) : (
          <StartButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartButton>
            
          )}

        </form>
      </HomeContainer>
    );
}
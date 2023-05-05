import { useForm, useWatch } from 'react-hook-form'
import { useEffect, useState } from "react";
import { FormContainer, MinutesAmount, TaskInput } from "./styles";

export function NewCycleCountdown() {

  const { register, handleSubmit, watch, reset }  = useForm<NewCycleFormData>()

  interface NewCycleFormData {
    task: string
    minutesAmount: number
  }
  
  return (

      <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>


          <TaskInput 
              id="task" 
              list="project-suggestions" 
              placeholder="Dê um nome para o seu projeto"
              disabled={!!activeCycle}
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
            step={2}
            min={2}
            max={90}
            disabled={!!activeCycle}
            {...register('minutesAmount', {valueAsNumber: true})}
          />

          <span>minutos.</span>
      </FormContainer>

  )
}
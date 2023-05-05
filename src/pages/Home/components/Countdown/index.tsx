import { useEffect, useState } from "react";
import { CountdownContainer } from "./styles";
import { differenceInSeconds } from "date-fns";

interface CountdownProps {
    activeCycle: any;
    setCycles: any;
    activeCycleId: any;
}

export function Countdown({ activeCycle, setCycles, activeCycleId }: CountdownProps) {
    const [amountSecsPassed, setAmountSecsPassed] = useState(0)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    // Calcula o contador
    useEffect(() => {
        let interval: number

        if (activeCycle) {
        interval = setInterval(() => {
            const secDiff = differenceInSeconds(
            new Date(), 
            activeCycle.startDate
            )

            if (secDiff > totalSeconds) {
            setCycles(prevCycles => 
                prevCycles.map( cycle => {
                if (cycle.id == activeCycleId) {
                    return {...cycle, finishedDate: new Date()}
                } else {
                    return cycle
                }
                })
            )
            console.log(cycles)
            clearInterval(interval)

            } else {
            setAmountSecsPassed(secDiff)
            }

        }, 1000)
        }

        return () => {
        clearInterval(interval)
        }
    }, [activeCycle, totalSeconds])



    return (
        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <p>:</p>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    )
}
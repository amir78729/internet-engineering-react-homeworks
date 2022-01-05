import { useEffect, useState } from "react"
import { colors } from "../../constants/colors";
import { Button } from "../other/Button/Button";
import s from "./Question1.module.css"
export const Question1Component = () => {
    const [counter, setCounter] = useState(0);
    const [isUpCounting, setIsUpCounting] = useState(true);
    const [isTimerActive, setIsTimerActive] = useState(false);

    const toggleTimer = () => {
        if (isTimerActive) {
            setIsTimerActive(false);
        } else {
            setIsTimerActive(true);
        }
    }
    const toggleUpCounting = () => {
        if (isUpCounting) {
            setIsUpCounting(false);
        } else {
            setIsUpCounting(true);
        }
    }
    useEffect(() => {
        let timer;
        if (isTimerActive) {
            timer = setInterval(() => {
                setCounter(counter =>  isUpCounting ? counter + 1 : counter - 1);
            }, 1000);
        } else {
            clearInterval(timer)
        }
        return () => clearInterval(timer);
    }, [isTimerActive, isUpCounting])

    

    const reset = () => {
        setCounter(0);
        setIsTimerActive(false);
        setIsUpCounting(true);
    };

    return (
        <div className={s.Q1}>
            <h1>Question 2</h1>
            <div>
                <h4>Counter: {counter}</h4>
                <div className={s.ButtonsContainer}>
                    <Button 
                        title="reset" 
                        onClick={reset} 
                        background={colors.YELLOW}
                        disabled={counter === 0 && !isTimerActive} />
                    <Button 
                        title={`${isTimerActive ? 'stop' : 'start'} ⏱`} 
                        onClick={toggleTimer} 
                        color={'white'} 
                        background={isTimerActive ? colors.RED : colors.GREEN} />
                    <Button 
                        title={isUpCounting ? 'up counting 🔼' : 'down counting 🔽'} 
                        onClick={toggleUpCounting} 
                        color={'white'} 
                        background={!isUpCounting ? colors.RED : colors.GREEN} />
                </div>
            </div>
        </div>
    )
}
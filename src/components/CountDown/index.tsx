import moment from "moment";
import { Moment } from "moment";
import { useEffect, useState } from "react";

type CountDownProps = {
    endTime: Moment
    onCounterEnd?: () => void
}

export const CountDownt:React.FC<CountDownProps>= (props) => {
    const {endTime} = props;
    const {onCounterEnd} = props;

    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        const timeLeft = endTime.diff(moment(), "second");
        setRemainingTime(timeLeft)
    }, [])

    useEffect(() => {
        const id = setInterval(() => {
            setRemainingTime(remainingTime - 1);
        }, 1000);
        return () => {
            clearInterval(id);
        }
    }, [remainingTime])

    useEffect(() => {
        if (remainingTime === -1) {
            onCounterEnd?.();
        }
    }, [remainingTime])

    const min = Math.floor(remainingTime / 60);
    const sec = remainingTime % 60;
    

    if (remainingTime < 0) {
        return <p  style={{color: "red"}}>Time's up</p>
    }
    return (
        <div>
            <div className='product-time'>
            {
                <p style={{color: "red"}}>{min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}</p>
            }
            </div>
        </div>
    )
}
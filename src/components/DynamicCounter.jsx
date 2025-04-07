import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const DynamicCounter = () => {
    const [count, setCount] = useState(0);
    const bgRef = useRef(null);
    function increment(){
        setCount(count +1);
    }
    function decrement(){
        setCount(count-1);
    }
    function reset(){
        setCount(0); 
    }

    useEffect(()=> {
        if(count === 0){
            bgRef.current.style.backgroundColor = "white"
        }
        else if(count>0){
            bgRef.current.style.backgroundColor = "green"
        }
        else if(count<0){
            bgRef.current.style.backgroundColor = "red"
        }
    });

    return(
        <div ref={bgRef} className="counter">
            <h1>Dynamic Counter: </h1>
            <h2>{count}</h2>
            <div className="buttons">
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default DynamicCounter;
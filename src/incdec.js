import React, { useState } from "react";

const Incredec = () =>{
    const [count, setCount] = useState('1');

    function handleClick1()
    {
        setCount(count => count+1);
    }
    function handleClick2()
    {
        setCount(count => count-1);
    }
    return(
        <div>
            <p>count: {count}</p>
            <button onClick={handleClick1}>click to incre</button>
            <button onClick={handleClick2}>click to dec</button>
            
        </div>
    )
}

export default Incredec;
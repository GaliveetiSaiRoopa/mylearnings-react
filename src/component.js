import React, { useState } from "react";


function Component()
{
    const [name, setName] = useState('');
    const [submitName, setsubmitName] = useState('');
    const [issubmit, setSubmit] = useState('false');

    function handleNameChange(event)
    {
          setName(event.target.value);
    }
   
    function handleSubmit()
    {
        setsubmitName(name);
        setSubmit(true);
    } 
    return(<div>
        <lable>Enter the name: </lable>
        <input type="text" value={name} onChange={handleNameChange}/> <br/>
        <button onClick={handleSubmit}>submit</button>

     {submitName && (issubmit ? (<p>Entered name is {name}</p>) : (<p></p>))}
        
    </div>);
}


export default Component;
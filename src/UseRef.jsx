import React, { useState,useEffect,useRef } from 'react';


function InputComponent() {
    const [inputtext,setInput]=useState('')
    const count=useRef(0)
    useEffect(()=>{count.current=count.current+1})
   const inputEvent= (e)=>setInput(e.target.value)
    return (
        <div>
            <input  onChange={inputEvent} type="text"  />
            <h1>{count.current}</h1>
        </div>
    );
}

export default InputComponent;
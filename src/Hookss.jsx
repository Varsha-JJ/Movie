import React from 'react';
import { useState } from 'react';


const Hookss=()=>{

    const [count,setcount]=useState(0)
    const [name,setname]=useState('varsha')
    const increment=()=>{
        setcount(count+1)
        setname('incremented')
    }
    const decrement=()=>{
        
        if (count <= 0)
        {
            setcount(0)
            setname('nil')
        }
        else{
            setcount(count-1)
            setname('decremented')
        }
        
    }
    return(
        <>
        <h1>{count}</h1>
        <h2>{name}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </>
    )
}

export default Hookss
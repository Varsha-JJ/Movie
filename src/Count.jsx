import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

const Count = () => {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    console.log(count);
  return (
    <div>
        <h1>hi</h1>
        <span>{count}</span>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Count

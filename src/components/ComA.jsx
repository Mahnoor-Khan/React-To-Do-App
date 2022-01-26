
import React from "react";
import ComB from './ComB';
import {useReducer } from 'react';

let initialState=0
const reducer =(state, action)=>{
if(action.type=== "Inc"){
  return state + 1
}
if(action.type=== "Dec"){
  return state - 1
}   
return state
}

const ComA = () => {
    console.log('ComA - rendered')
    const [state,dispatch]=useReducer(reducer,initialState)
    return ( <>
        <div>
    <span>{state}</span><br/>
    <button onClick={()=> dispatch({type:"Inc"})}>Increment</button>
    <button onClick={()=> dispatch({type:"Dec"})}>Decrement</button>
    </div>

    
    </> );
}
 
export default ComA;
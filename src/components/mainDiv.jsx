import React, { Component } from 'react';
import { useRef , useState } from 'react';
import { useEffect } from 'react/cjs/react.development';


  

const MainDiv = () => {
    const LuckyName=useRef("")
    const[inputList , setinputList]=useState('')
    const[Items , setItems]=useState([])

    const itemEvent=(event)=>{
        setinputList(event.target.value)
    }




    let i=0
    const value=()=>{
        i++
        return i
    }
    
    const listOfItems=()=>{
       
        setItems((oldItems)=>{
            return [...oldItems,inputList]

        })   
    }


    return ( 
        
        <div className='main-div'>
        <h1 className='div-heading'>Simple Todo App</h1>
        <input className='div-input' id="luckyName" onChange={itemEvent} tpe="text" placeholder='Enter Your Task'/>
        <button onClick={listOfItems} className='div-btn'><i  className="fa fa-plus"></i></button>
       
        <ul className='div-ul'>
                {Items.map((itemVal)=>{
                    value()
                    return <li className='div-ul-li' key={i}>{itemVal}
                    <button className='btnUpdate'><i className='fa fa-edit'></i></button>
                    <button className='btndlt'><i className='fa fa-trash'></i></button>
                    
                    </li>
                    
                })}
                
              </ul>
        </div>
        
     );
}
 
export default MainDiv;
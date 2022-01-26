import './App.css'
import { useState, useEffect, useRef } from 'react'

const Todo = () => {
  const Task = useRef('')
  const [Items, setItems] = useState([])
  const [inputList, setinputList] = useState('')
  const [update, setUpdate] = useState('')
  const [BtnBool, setBtnBool] = useState(true)

  useEffect(() => {
    Items.filter((objs) => {
      inputList === objs
        ? (document.getElementById(objs).style.color = "red")
        : (document.getElementById(objs).style.color = "black");
    });
  }, [inputList]);

  const itemEvent = (event) =>  setinputList(event.target.value)
  

  const delTask = (id) => {
    Items.forEach(element => {
      if(element == id){
        Items.splice(Items.indexOf(element), 1)
        setItems([...Items])
      }
    });
  }

  const UpdateTask = (taskId) => {
    
    if(taskId !== null){
      
      Items.forEach(element => {
        setUpdate(taskId)
        if (element == taskId) {
          Task.current.value = element
        }
        setBtnBool(false)
      })
    }
    else if (taskId == null){
      for (let j = 0; j < Items.length; j++) {
        if (Items[j] === update) {
          Items[j] = inputList
        }
        setItems([...Items])
        Task.current.value = ''
        setBtnBool(true)
      }
    }
    
  }


  const getTask = () => {
    Items.includes(Task.current.value)
      ? alert("Task Already added")
      : Task.current.value === ""
      ? alert("plz fill the feild")
      : setItems([...Items, inputList]);
    setinputList("");
    Task.current.value = "";

  }

  return (
    <>

      <input  type="text" id="task" ref={Task} onChange={itemEvent} />
      {BtnBool ? <button onClick={getTask} id="SubmitBtn">
        Submit
      </button> :
      <button onClick={() => UpdateTask(null)} id="UpdateBtn">
        Update
      </button> }
  
      <ul >
        {Items.map((itemVal, ind) => {
          return (
            <li key={ind} id={itemVal}>
              {itemVal}
              <button  onClick={() => delTask(itemVal)}><i className="fa fa-trash"></i></button> 
             <button  onClick={() => UpdateTask(itemVal)}><i className="fa fa-edit"></i></button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Todo

import './Todo.scss'
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
  
  const ClearList=()=>{
    setItems([])
  }

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
          // setinputList(Task.current.value)
          if(inputList== ""){
            Items[j]= update
          }
          else{
            Items[j] = inputList
          }
          
        }
        setItems([...Items])
        Task.current.value = ''
        setBtnBool(true)
      }
    }
    
  }
  let i=0
  const idOfTask=()=>{
    i++
  }

  const getTask = () => {
    Items.includes(Task.current.value)
      ? alert("Task Already added")
      : Task.current.value === ""
      ? alert("plz fill the feild")
      : setItems([...Items, inputList]);
    setinputList("");
    Task.current.value = "";
    idOfTask()
  }

  return (
    <>
    <div className='main-div'>
    <h1>To Do App</h1>
      <input className='inputFeild' type="text" id="task" ref={Task} onChange={itemEvent} />
      {BtnBool ? <button className='SubmitBtn' onClick={getTask} id="SubmitBtn">
        +
      </button> :
      <button className='UpdateBtn2' onClick={() => UpdateTask(null)} id="UpdateBtn">
        <i className='fa fa-edit'></i>
      </button> }
      <br/>
      <br/>

      <div className='TaskList'>
      <ul >
        {Items.map((itemVal, ind) => {
          return (
            <div key={itemVal} className='TaskListLiElem'>
            <li  id={itemVal}>
              {itemVal}
              <button  className='delBtn'  onClick={() => delTask(itemVal)}><i className="fa fa-trash"></i></button> 
             <button  className='updateBtn' onClick={() => UpdateTask(itemVal)}><i className="fa fa-edit"></i></button>
            </li>
            </div>
          )
        })}
      </ul>
      </div>
      <br/>

      <footer className='footer'>
      <span>You have <span>{Items.length}</span> pending tasks  </span> 
      <button className='ClearAllBtn' onClick={ClearList}>Clear All</button> 
      </footer>
     
      </div>

    </>
  )
}

export default Todo

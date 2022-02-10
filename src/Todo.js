import './Todo.scss'
import { useState, useEffect, useRef } from 'react'
import {ItemsList} from './store/DataStore'
import { observer } from 'mobx-react-lite'


const Todo = observer(() => {
  const Task = useRef('')
  const [BtnBool, setBtnBool] = useState(true)
  const [updateid , setUpdateId]=useState()
  // const [Items, setItems] = useState([])
  // const [inputList, setinputList] = useState('')
  // const [update, setUpdate] = useState('')



  // useEffect(() => {
  //   ItemsList.Items.filter((objs) => {
  //     Task.current.value === objs
  //       ? (document.getElementById(ItemsList.Items.objs.id).style.color = "red")
  //       : (document.getElementById(ItemsList.Items.objs.id).style.color = "black");
  //   });
  // }, [Task.current.value]);

  // const itemEvent = (event) =>  setinputList(event.target.value)
  
  // const ClearList=()=>{
  //   setItems([])
  // }

  // const delTask = (id) => {
    // Items.forEach(element => {
    //   if(element == id){
    //     Items.splice(Items.indexOf(element), 1)
    //     setItems([...Items])
    //   }
    // });
  // }

  // const UpdateTask = (taskId) => {
 
  //   if(taskId !== null){
      
  //     Items.forEach(element => {
  //       setUpdate(taskId)
  //       if (element == taskId) {
  //         Task.current.value = element
  //       }
  //       setBtnBool(false)
  //     })
  //   }
  //   else if (taskId == null){
  //     for (let j = 0; j < Items.length; j++) {
  //       if (Items[j] === update) {
  //         // setinputList(Task.current.value)
  //         if(inputList== ""){
  //           Items[j]= update
  //         }
  //         else{
  //           Items[j] = inputList
  //         }
          
  //       }
  //       setItems([...Items])
  //       Task.current.value = ''
  //       setBtnBool(true)
  //     }
  //   }
    
  // }

  // const getTask = () => {
  //   Items.includes(Task.current.value)
  //     ? alert("Task Already added")
  //     : Task.current.value === ""
  //     ? alert("plz fill the feild")
  //     : setItems([...Items, inputList]);
  //   setinputList("");
  //   Task.current.value = "";
  //   idOfTask()
  // }
const updateit =(itemVal)=>{
  Task.current.value =itemVal
  setUpdateId(itemVal)
  setBtnBool(false)
}
  return (
    <>
    <div className='main-div'>
    <h1>To Do App</h1>
      <input className='inputFeild' type="text" id="task" ref={Task} />
      {BtnBool ? <button className='SubmitBtn' onClick={()=> ItemsList.getTask(Task.current.value , Task.current.value='')} id="SubmitBtn">
        +
      </button> :
      <button className='UpdateBtn2' onClick={() => ItemsList.UpdateTask(updateid , Task.current.value , setBtnBool(true) , Task.current.value='') } id="UpdateBtn">
        <i className='fa fa-edit'></i>
      </button> }
      <br/>
      <br/>

      <div className='TaskList'>
      <ul >
        {ItemsList.Items.map((itemVal, ind) => {
          return (
            <div key={ind} className='TaskListLiElem'>
            <li  id={ind}>
              {itemVal}
              <button  className='delBtn'  onClick={() => ItemsList.delTask(itemVal)}><i className="fa fa-trash"></i></button> 
             <button  className='updateBtn' onClick={() =>updateit(itemVal)}><i className="fa fa-edit"></i></button>
            </li>
            </div>
          )
        })}
      </ul>
      </div>
      <br/>

      </div>

    </>
  )
})

export default Todo

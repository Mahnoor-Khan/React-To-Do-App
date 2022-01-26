import './App.css';
import { useState , useEffect ,createContext, useRef, useCallback, useMemo } from 'react';
import ComB from './components/ComB';
import ComA from './components/ComA';

const FirstName=createContext()
console.log('App Component Rendered')


const App=()=> {
  const LuckyName=useRef("")
  const [name,setName]=useState('Mahnoor')
  const [show,setShow]=useState(false)
  
  
  
  
  useEffect((()=>
  console.log('ok')
  ),[]);
  let lukyName
  const getYourName= useMemo(()=>{
    //  name=LuckyName.current.value
    // name === "" ? alert('Please Fill the form') : setShow(true);
    lukyName=LuckyName.current.value
    lukyName === "" ? alert('Please Fill the form') : setShow(true);
    
  },[name])

  return (
    <div>

    <h1>{name}</h1>

    <button onClick={useCallback(()=>setName(<FirstName.Provider value={'Mahnoor Khan'}>
      <ComB/>
    </FirstName.Provider>),[name])}>Click me to get full name!</button>

    <br/><br/>

    <form onSubmit={getYourName}>
    <label>Enter Your Lucky Name</label><br/>
      <input type="text" id="luckyName" ref={LuckyName }/><br/>
      <button>Submit</button>
      <p>{show ? `Your Lucky Name is ${lukyName}` : ""}</p>
      
    </form>


    <ComA/>
</div>
    
  );
}

export default App;
export { FirstName };




import React ,{useState, useEffect}from 'react'
import Todoitems from './Todoitems';

export default function TodoAdd() {
  const [state, setState] = useState("")
  const [item ,setItem]= useState([])



  function saveTodosToLocalStorage(item) {
    localStorage.setItem('item', JSON.stringify(item));
  }
  

  function getTodosFromLocalStorage() {
    const todos = localStorage.getItem('item');
    if (todos) {
      return JSON.parse(todos);
    } else {
      return [];
    }
  }
  

  useEffect(() => {
    const savedTodos = getTodosFromLocalStorage();
    setItem(savedTodos);
  }, []);

  useEffect(() => {
    saveTodosToLocalStorage(item);
  }, [item]);
// end

const addFun =()=>{
  
 var toggleObj ={
  title:state,
  status:true,
 };
 

  setItem([...item, toggleObj]);
  console.log(toggleObj)
}

const deleteFun =(ind)=>{
  const arryFilter =item.filter((item, i)=>{
       return ind!=i;
  })
  setItem(arryFilter);
}

const togglehandle =(index)=>{
 let newarr = item.map((el,i)=>{
   return index==i ? {...el ,status : !el.status }:el;
 })
 setItem(newarr)
}

// useEffect(()=>{
//   localStorage.setItem("item", JSON.stringify(item));
// }, [item]);


  return (
    <div>
      <h1>Todo Example</h1>
      <input
        type="text"
        placeholder='Add ToDo' 
        value={state} 
        onChange={(event)=>{setState(event.target.value)}}>
      </input>

      <button onClick={addFun} >Add</button>

     <Todoitems items={item} 
     deleteFun={deleteFun} 
     togglehandle={togglehandle} />

    </div>
  )
}

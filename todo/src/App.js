import React, { useState } from 'react'
import './App.css';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {

  const[todoList, setTodoList]=useState([]);
  let addList=(inputText)=>{
    if(inputText.trim()!==''){
    setTodoList([...todoList,inputText]);
    }
  };

  const deleteItem=(index)=>{

    const newList=[...todoList];
    newList.splice(index,1);
    setTodoList(newList);
  };
  
  return (
    <div classname="main-container">
      <div classname="center-container">
      <TodoInput addList={addList}/>
      <h1 className='app-heading'>TODO LIST APP</h1>
      <hr/>
    {todoList.map((listItem,index)=>{
      return(
        <TodoList key={index} i={index} item={listItem} deleteItem={deleteItem}/>
      );
    })}
      
      </div>
    </div>
    
  );
}

export default App;

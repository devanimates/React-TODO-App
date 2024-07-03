import React,{useState} from 'react';
import './TodoInput.css'
const TodoInput=(props)=>{

    const [inputText,setInputText]=useState('');

    return(

        <div className='input-container'>
            <input className='input-todo-box'
             type='text'
            placeholder='Enter your task' 
            value={inputText}
            onChange={e=>
                {
                    setInputText(e.target.value);
                }
            }   />
            <button className='input-btn-box'
            
            onClick={()=>{
                props.addList(inputText)
                setInputText("")
            }} >+</button>
            
        </div>
    );
};

export default TodoInput;
import React,{useState} from 'react';
import './TodoList.css'
const TodoList=(props)=>{

    return(
        <div className='list-container'>
            <li className='list-items'>
                {props.item}
                <span className='icons'>
                <i className="fa-solid fa-trash-can" onClick={e=>{
                    props.deleteItem(props.index);
                }}>
                    
                </i>
                </span>
            </li>

        </div>
    );
};

export default TodoList;
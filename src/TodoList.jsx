import React from 'react';
import 'tachyons';
import './App.css';

export default function TodoList(props) {


    return (
        <>  
            <div className = "todo_style">
            <i 
            className = "fa fa-times grow"
            aria-hidden = "true" 
            onClick = {() =>{
                props.onSelect(props.id);
            }} 

            />
            <li> {props.text} </li>
            </div>
        </>
    );
}

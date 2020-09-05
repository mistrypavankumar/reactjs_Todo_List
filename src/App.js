import React, {useState}from 'react';
import TodoList from './TodoList';
import './App.css';
import 'tachyons';

export default function App() {

  const [listItems, setListItems] = useState("");

  //creating an empty array
  const [Items, setItems] = useState([]);


  const todoItem = (event) => {
    setListItems(event.target.value);
  };

  const addList = () => {
      setItems((oldItems) => {
        return  [...oldItems, listItems];
      });
      setListItems((""));
  }

  const deleteItems = (id) =>{
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem,index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
    <div className = "main_div">
      <div className = 'center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <div className = "todoAdd_container">
          <input type = "text" placeholder = "Added ToDo items" onChange = {todoItem} 
            value = {listItems}
          />
          <button className = "grow" onClick = {addList}> <i className = "fa fa-plus" aria-hidden = 'true' /> </button>
          </div>
          <div className = "listOfItems_container">
            <ol>
              {/* <li>{listItems}</li> */}
             { Items.map((itemval, index) =>{
                  return <TodoList 
                  key = {index}
                  id = {index}
                  text = {itemval}
                  onSelect = {deleteItems}

                  />
              })}
            </ol>
          </div>
      </div>
    </div>
    </>
  )
}

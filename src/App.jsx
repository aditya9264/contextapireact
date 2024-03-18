import AppName from "./components/appname";
import Addtodo from "./components/addtodo.jsx";
import Todoitems from "./components/todoitems.jsx";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./components/Welcomemsg";
import { TodoItemsContext } from "./components/store/todo-items-store.jsx";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added : ${itemName}, Date : ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newTodoItems);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
  };

  // const defaultTodoItems = [{name : 'Buy Ghee' , dueDate : 'Today'}]

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem, 
      deleteItem
      }}>
      <center className="todo-container">
        <AppName></AppName>
        <Addtodo></Addtodo>
        <Welcomemsg></Welcomemsg>
        <Todoitems></Todoitems>
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;

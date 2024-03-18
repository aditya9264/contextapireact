import { useContext } from "react";
import Todoitem from "./Todoitem";
import { TodoItemsContext } from "./store/todo-items-store";
import styles from "./Todoitems.module.css";
const Todoitems = () => {

const {todoItems}=  useContext(TodoItemsContext);


  return (
    <div className={styles.itemscontainer}>
      {todoItems.map((item) => (
        <Todoitem 
         todoDate={item.dueDate}
         todoName={item.name}>
         </Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;

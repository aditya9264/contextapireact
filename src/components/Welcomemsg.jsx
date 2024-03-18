import styles from "./Welcomemsg.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
const Welcomemsg = () =>{
    
    const {todoItems}=  useContext(TodoItemsContext);


return todoItems.length ===0  && 
<p className= {`${styles.Welcomemsg} shadow p-3 mb-5 bg-body-tertiary rounded`}>
    Enjoy Your day</p>
}
export default Welcomemsg
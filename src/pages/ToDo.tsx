import { TodoProvider } from "../context/ToDoContext";
import { Toaster } from "react-hot-toast";
import { AddTodo } from "../components/ToDo/AddToDo";
import { TodoList } from "../components/ToDo/ToDoList";

function ToDo() {
  return (
    <div>
      <TodoProvider>
        <Toaster position="bottom-center" />
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default ToDo;

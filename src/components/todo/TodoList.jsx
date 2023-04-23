import { useSelector } from "react-redux";

import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import Dropdown from "./Dropdown";

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos);
  const blur = useSelector((state) => state.style.blur);

  return (
    <div className={`overflow-y-auto ${blur}`}>
      <div className="flex h-[100px] items-center justify-center">
        <h2 className=" mr-4 text-center font-roboto text-3xl font-bold text-blue-800">
          {props.headerText}
        </h2>
        {props.list_edit ? <Dropdown id={props.category} /> : <></>}
      </div>

      <TodoInput category={props.category} />

      {todos
        .filter((todo) => todo.category === props.category)
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;

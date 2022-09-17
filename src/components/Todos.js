import React from "react";
import Todo from "./Todo";
import style from "./Todos.module.css";

const Todos = (props) => {
  return (
    <div className={style.todos}>
      {props.Todos.map((todo) => (
        <Todo todo={todo} id={todo.id} key={todo.id} getid={props.getid} />
      ))}
    </div>
  );
};

export default Todos;

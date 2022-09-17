import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import style from "./Todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo.todo;
  const { id } = props.todo;

  const handleClicked = () => {
    props.getid(id);
  };
  return (
    <div className={style.todo}>
      <section>
        <h2>{title}</h2>
        <p>{desc}</p>
      </section>
      <section className={style.btn_container}>
        <button onClick={handleClicked}>
          {<FaRegTrashAlt style={{ fontSize: "20px" }} />}
        </button>
      </section>
    </div>
  );
};

export default Todo;

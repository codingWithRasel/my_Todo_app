import React, { useState } from "react";

import style from "./NewTodo.module.css";
const NewTodo = (props) => {
  const [todo, setTodo] = useState({ id: "", title: "", desc: "" });
  const { title, desc } = todo;
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const submitted = (e) => {
    e.preventDefault();
    props.getTodo(todo);
    setTodo({ title: "", desc: "" });
  };
  return (
    <form onSubmit={submitted}>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title here.."
        required
        value={title}
        onChange={handleChange}
      />
      <textarea
        type="text"
        id="desc"
        name="desc"
        placeholder="Description here..."
        required
        value={desc}
        onChange={handleChange}
      />
      <input className={style.btn} type="submit" value="Add" />
    </form>
  );
};

export default NewTodo;

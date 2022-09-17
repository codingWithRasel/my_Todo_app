import React, { useState } from "react";
import Todos from "./Todos";
import style from "./Home.module.css";
import NewTodo from "./NewTodo";
import Header from "./Header";
import { v4 as uuid } from "uuid";
const Home = () => {
  const [todoList, settodoList] = useState([]);

  const getid = (id) => {
    const filtered = todoList.filter((todo) => todo.id !== id);
    settodoList(filtered);
  };
  const getTodo = (todo) => {
    settodoList([...todoList, { id: uuid(), todo }]);
    console.log(todoList);
  };
  const reset = () => {
    settodoList([]);
  };
  return (
    <div className={style.home}>
      <Header />
      <NewTodo getTodo={getTodo} />
      <Todos Todos={todoList} getid={getid} />
      <p onClick={reset} className={style.btn}>
        Clear all
      </p>
    </div>
  );
};

export default Home;

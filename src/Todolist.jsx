import React from "react";

const Todolist = ({ onSelect, text }) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa-solid fa-xmark"
          onClick={onSelect}></i>
        <li> {text} </li>
      </div>
    </>
  );
};
export default Todolist;

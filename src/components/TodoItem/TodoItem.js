import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;
  return <div>{content}
   <button id = {id} onClick={props.deleteItem} className="btn btn-primary">
        Sil
      </button> </div>;
}

export default Todo;

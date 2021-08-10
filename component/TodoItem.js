import React from "react";
import { DatePicker, Button, message, Input, Pagination, Divider } from "antd";
import "antd/dist/antd.css";
import "../Css.css";
import { useHistory } from "react-router-dom";
const TodoItem = (props) => {
  const history = useHistory();

  return (
    <div
      className="main__todo"
      onClick={() => history.push("/todos/" + props.id)}
    >
      <span>
        <strong>Title : {props.tit}</strong>
      </span>
      <span>Creator : {props.nm}</span>
      <span>Status: {props.stt}</span>
      <hr className="main__todo-hr" />
      <span className="main__todo-des">Description : {props.src}</span>
    </div>
  );
};
export default TodoItem;

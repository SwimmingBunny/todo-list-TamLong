import React from "react";
import TodoItem from "./TodoItem.js";
import { useLocation } from "react-router";
import { DatePicker, Button, Radio, Input, Pagination, Checkbox } from "antd";
import "antd/dist/antd.css";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Alltask = (props) => {
  const query = useQuery();
  const [status, setStatus] = React.useState("");
  React.useEffect(() => {
    setStatus(query.get("stt"));
  }, [query]);

  return props.listData
    .filter((vl) => {
      if (!status) {
        return true;
      } else {
        return vl.status === status.trim();
      }
    })

    .map((item, index) => {
      return (
        <TodoItem
          tit={item.title}
          key={index}
          id={index}
          stt={item.status}
          date={item.date}
          nm={item.name}
          src={item.script}
        />
      );
    });
};

export default Alltask;

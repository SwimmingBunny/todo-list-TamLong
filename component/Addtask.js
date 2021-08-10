import React from "react";
import { DatePicker, Button, message, Input, Pagination } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import "../Css.css";
import moment from "moment";
const Addtask = (props) => {
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const [script, setScript] = React.useState("");
  const [deadline, setDeadline] = React.useState(new Date());
  const history = useHistory();
  React.useEffect(() => {
    const list = localStorage.getItem(props.taskList);
    console.log(list);
    if (list) {
      props.setListData(JSON.parse(list));
    }
  }, []);

  const handleListData = () => {
    console.log("alo");
    console.log(history);
    const list = [
      {
        title: title,
        name: name,
        script: script,
        date: deadline,
        status: "new",
      },
      ...props.listData,
    ];
    localStorage.setItem(props.taskList, JSON.stringify(list));
    props.setListData(list);
    history.push("/todos");
  };
  return (
    <div className="main__addtask">
      <div className="main__task">
        <div className="main__task-inline">
          <span className="main__task-span">Title:</span>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Add your title"}
          />
        </div>
        <div className="main__task-inline">
          <span className="main__task-span">Creator:</span>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Add your name"}
          />
        </div>
        <div className="main__task-inline">
          <span className="main__task-span">Create at:</span>
          <DatePicker
            value={deadline}
            value={moment(deadline, "DD/MM/YYYY")}
            format={"DD/MM/YYYY"}
            onChange={(date, dateString) => {
              setDeadline(dateString);
              console.log(date, dateString);
            }}
          />
        </div>
        <div className="main__task-inline">
          <span className="main__task-span">Description:</span>
          <Input
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder={"Add your description"}
          />
        </div>
      </div>
      <Button onClick={handleListData} type="primary">
        Save
      </Button>
    </div>
  );
};
export default Addtask;

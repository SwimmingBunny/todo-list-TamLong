import React from "react";
import { DatePicker, Button, Radio, Input, Pagination, Checkbox } from "antd";
import "antd/dist/antd.css";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
const TodoDetail = (props) => {
  const [detail, setDetail] = React.useState("");
  const [newTitle, setNewTitle] = React.useState("");
  const [newName, setNewName] = React.useState("");
  const [newScript, setNewScript] = React.useState("");
  const [newDate, setNewDate] = React.useState("");
  const [radioValue, setRadioValue] = React.useState(1);
  const history = useHistory();
  let { id } = useParams();
  const onChange = (e) => {
    setRadioValue(e.target.value);
  };
  React.useEffect(() => {
    const d = props.listData[+id];
    setDetail(d);
    setNewTitle(props.listData[+id].title);
    setNewName(d?.name);
    setNewScript(d?.script);
    setNewDate(d?.date);
  }, [id]);
  // console.log(id);
  // console.log(props.listData[+id]);
  console.log(id);
  console.log(props.listData);
  const handleDeleteItem = () => {
    const confirm = window.confirm("Are you sure to delete");
    if (confirm) {
      props.listData.splice(id, 1);
      localStorage.setItem(props.taskList, JSON.stringify(props.listData));

      props.setListData([...props.listData]);
      history.push("/todos");
    }
  };
  const getStatus = (stt) => {
    switch (stt) {
      case 2:
        return "doing";
      case 3:
        return "done";
      default:
        return "new";
    }
  };
  const onSave = () => {
    const newData = props.listData.map((vl, idx) => {
      if (idx === +id) {
        vl.title = newTitle;
        vl.name = newName;
        vl.script = newScript;
        vl.status = getStatus(radioValue);
        vl.date = newDate;
      }

      return vl;
    });
    localStorage.setItem(props.taskList, JSON.stringify(newData));

    props.setListData(newData);
    const confirm = window.confirm("Are you sure to save");
    if (confirm) {
      history.push("/todos");
    }
  };

  return (
    <div>
      <div className="main__addtask">
        {false ? (
          <>
            <Input value={detail?.title} />
            <Input value={detail?.name} />
            <Input value={detail?.status} />
            <Input value={detail?.date} />
            <Input value={detail?.script} />
          </>
        ) : (
          <div className="main__task">
            <div className="main__task-inline">
              <span className="main__task-span">Title:</span>
              <Input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="main__task-inline">
              <span className="main__task-span">Creator:</span>
              <Input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />{" "}
            </div>
            <div className="main__task-inline">
              <span className="main__task-span">Description:</span>
              <Input
                value={newScript}
                onChange={(e) => setNewScript(e.target.value)}
              />
            </div>
            <div className="main__task-inline">
              <span className="main__task-span"> Create date:</span>
              <DatePicker
                value={newDate}
                value={moment(newDate, "YYYY/MM/DD")}
                onChange={(date, dateString) => {
                  setNewDate(dateString);
                  console.log(date, dateString);
                }}
              />
            </div>
            <div className="main__task-radio">
              <Radio.Group onChange={onChange} value={radioValue}>
                <Radio value={1}>New</Radio>
                <Radio value={2}>Doing</Radio>
                <Radio value={3}>Done</Radio>
              </Radio.Group>
            </div>
            <div className="main__task-btn">
              <Button type="primary" onClick={onSave}>
                Save
              </Button>
              <Button
                type="primary"
                onClick={() => {
                  setNewTitle(detail?.title);
                  setNewName(detail?.name);
                  setNewScript(detail?.script);
                }}
              >
                Reset
              </Button>
              <Button type="primary" onClick={handleDeleteItem}>
                Delete
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoDetail;

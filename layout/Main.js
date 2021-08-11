import React from "react";
import TodoItem from "../component/TodoItem";
import { DatePicker, Button, message, Input, Pagination } from "antd";
import "antd/dist/antd.css";
import "../Css.css";
import Addtask from "../component/Addtask";
import TodoDetail from "../component/TodoDetail";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useParams,
} from "react-router-dom";
import Alltask from "../component/Alltask";

const Main = () => {
  const [listData, setListData] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [textSearch, setTextSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const TASK_LIST = "TASKLIST";

  const PAGE_SIZE = 16;
  const getData = () => {
    return listData
      .filter((vl) => {
        return vl.title.includes(textSearch);
      })
      .splice((currentPage - 1) * PAGE_SIZE)
      .splice(0, PAGE_SIZE);
  };
  const onSearch = () => {
    setTextSearch(value);
  };
  return (
    <BrowserRouter>
      <div className="container">
        <div className="header">
          <Button type="primary" className="header__btn">
            <NavLink to="/creatNewTask">Creat New Task</NavLink>
          </Button>
          <div className="header__input">
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search your title"
            />
            <Button
              onClick={onSearch}
              type="primary"
              className="header__iput--btn"
            >
              Search
            </Button>
          </div>
        </div>
        <div className="sideBar">
          <Button type="primary" className="siderBar__btn">
            <NavLink to="/todos" exact>
              All task
            </NavLink>
          </Button>
          <Button type="primary" className="siderBar__btn">
            <NavLink to="/todos?stt=new" exact>
              New Task
            </NavLink>
          </Button>
          <Button type="primary" className="siderBar__btn">
            <NavLink to="/todos?stt=doing " exact>
              Doing task
            </NavLink>
          </Button>
          <Button type="primary" className="siderBar__btn">
            <NavLink to="/todos?stt=done" exact>
              Done Task
            </NavLink>
          </Button>
        </div>
        <div className="main">
          <Switch>
            <Route path="/creatNewTask">
              <Addtask
                taskList={TASK_LIST}
                setListData={setListData}
                listData={getData()}
              />
            </Route>
            <Route path="/todos/:id">
              <TodoDetail
                setListData={setListData}
                listData={getData()}
                taskList={TASK_LIST}
              />
            </Route>
            <Route path="/todos">
              <div className="main__alltask">
                <div className="main__alltask-render">
                  {listData ? (
                    <Alltask setListData={setListData} listData={getData()} />
                  ) : (
                    <div>"noting here"</div>
                  )}
                </div>
              </div>
              <div className="main__pagi">
                <Pagination
                  pageSize={PAGE_SIZE}
                  current={currentPage}
                  total={listData.length}
                  onChange={(page) => {
                    setCurrentPage(page);
                  }}
                />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default Main;

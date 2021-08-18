import { useCallback, useEffect, useState } from "react";
import { Tabs } from "zent";
import { getTodoList } from "../../api";
import { TodoList } from "../../components/TodoList";
import { IPersonalInfo } from "../../model";
import { taskStatus } from "../../model";
import "./index.css";
const TabPanel = Tabs.TabPanel;

export const Home: React.FC = () => {
  const [activedId, setActivedId] = useState<string>("1");
  const [todoList, setTodoList] = useState<IPersonalInfo[]>([]);

  const handlegetTodoList = useCallback(() => {
    getTodoList().then((res) => {
      console.log(res);
      setTodoList(res as unknown as IPersonalInfo[]);
      return;
    });
    return;
  }, []);
  useEffect(() => {
    handlegetTodoList();
    return;
  }, [handlegetTodoList, activedId]);
  const onTabChange = useCallback((id) => {
    setActivedId(id);
  }, []);

  return (
    <div className="tabsContainer">
      <Tabs activeId={activedId} onChange={onTabChange}>
        <TabPanel tab="进行中" id="1">
          <TodoList
            key="1"
            todoList={todoList.filter((item) => item.status === 1)}
            handlegetTodoList={handlegetTodoList}
            status={taskStatus.Doing}
          />
        </TabPanel>
        <TabPanel tab="已完成" id="2">
          <TodoList
            key="2"
            todoList={todoList.filter((item) => item.status === 2)}
            handlegetTodoList={handlegetTodoList}
            status={taskStatus.Success}
          />
        </TabPanel>
      </Tabs>
    </div>
  );
};

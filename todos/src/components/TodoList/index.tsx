/* eslint-disable react/jsx-no-comment-textnodes */
import { useCallback, useEffect, useState } from "react";
import { getTodoList, addTodo } from "../../api/index";
import { TodoItem } from "../TodoItem/index";
import { Button, Dialog, Input } from "zent";
import { taskStatus, IPersonalInfo } from "../../model/index";
import "./index.css";
interface ITodoListProps {
  todoList: IPersonalInfo[];
  handlegetTodoList: () => void;
  status: taskStatus;
}
export const TodoList: React.FC<ITodoListProps> = (props) => {
  const { todoList, handlegetTodoList, status } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [defaultValueText, setDefaultValueText] = useState<string>("");
  const handleAddTodo = useCallback(() => {
    addTodo({
      id: new Date().getTime(),
      text: defaultValueText,
      status: taskStatus.Doing,
    }).then((res) => {
      setVisible(false);
      setDefaultValueText("");
      handlegetTodoList();
      console.log(res);
    });
  }, [defaultValueText, handlegetTodoList]);
  const onTextChange = useCallback((e) => {
    setDefaultValueText(e.target.value);
  }, []);
  return (
    <div>
      {status && (
        <div className="addButton" onClick={() => setVisible(true)}>
          <Button>添加计划</Button>
        </div>
      )}
      <div className="listContainer">
        {todoList?.map((item) => {
          return (
            <TodoItem
              key={item.id + item.text}
              id={item.id}
              text={item.text}
              handlegetTodoList={handlegetTodoList}
            />
          );
        })}
      </div>
      <Dialog
        visible={visible}
        onClose={() => {
          setVisible(false);
          setDefaultValueText("");
        }}
        footer={<Button onClick={handleAddTodo}>确定</Button>}
        title="添加计划"
      >
        <Input
          defaultValue={defaultValueText}
          onChange={onTextChange}
          placeholder="请输入计划"
        />
      </Dialog>
    </div>
  );
};

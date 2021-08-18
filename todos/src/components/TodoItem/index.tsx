import { useCallback, useState } from "react";
import { Checkbox, ClampLines, Button, Icon, Dialog, Input } from "zent";
import { deleteTodo, editTodo } from "../../api";
import "./index.css";
interface ITodoItemProps {
  id: number;
  text: string;
  handlegetTodoList: () => void;
}

export const TodoItem: React.FC<ITodoItemProps> = (props) => {
  const { id, text, handlegetTodoList } = props;
  const [defaultText, _setDefaultText] = useState<string>(text);
  const [checked, setChecked] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [defaultValueText, setDefaultValueText] = useState<string>("");
  const handleSuccess = useCallback(() => {
    setChecked(true);
    editTodo({ id, text: defaultText, status: 2 }).then((res: any) => {
      setVisible(false);
      handlegetTodoList();
    });
  }, [defaultText, handlegetTodoList, id]);
  const handleDelete = useCallback(() => {
    deleteTodo({ id: id }).then((res) => {
      handlegetTodoList();
      setVisible(false);
      setDefaultValueText("");
    });
  }, [handlegetTodoList, id]);
  const handleEdit = useCallback(() => {
    editTodo({ id, text: defaultValueText, status: 1 }).then((res: any) => {
      setVisible(false);
      handlegetTodoList();
    });
  }, [defaultValueText, handlegetTodoList, id]);
  const onTextChange = useCallback((e) => {
    setDefaultValueText(e.target.value);
  }, []);
  return (
    <div>
      <div className="itemContainer">
        <Checkbox
          className="itemSuccessButton"
          checked={checked}
          onChange={handleSuccess}
        ></Checkbox>
        <div className="itemText">
          <ClampLines lines={1} showPop={true} text={defaultText} />
        </div>
        <div className="itemButton">
          <Button
            size="small"
            onClick={() => {
              setVisible(true);
              setDefaultValueText(text);
            }}
          >
            编辑
          </Button>
          <Button size="small" onClick={handleDelete}>
            删除
          </Button>
        </div>
      </div>
      <Dialog
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        footer={<Button onClick={handleEdit}>确定</Button>}
        title="编辑计划"
      >
        <Input defaultValue={defaultValueText} onChange={onTextChange} />
      </Dialog>
    </div>
  );
};

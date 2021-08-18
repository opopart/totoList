import request from "../utils/index";
export const getTodoList = async () => {
  return request({
    url: `/api/list`,
    method: "get",
  });
};

export const addTodo = async (data: any) => {
  return request({
    url: "/api/add",
    method: "post",
    data,
  });
};

export const deleteTodo = async (data: any) => {
  return request({
    url: "/api/delete",
    method: "post",
    data,
  });
};

export const editTodo = async (data: any) => {
  return request({
    url: "/api/edit",
    method: "post",
    data,
  });
};

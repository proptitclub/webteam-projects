import React, { useState } from "react";
import styled from "styled-components";
import { TaskItem } from "./TaskList/TaskItem";
import { ActionBar } from "./TaskList/ActionBar";

export const TaskList = () => {
  const [isAddNew, setIsAddNew] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Làm nốt cái projects này đi",
      content: "K làm khác biết",
    },
    {
      id: 2,
      title: "Đùa tí thôi mà",
      content: "Làm gì căng",
    },
  ]);
  const [taskEdit, setTaskEdit] = useState(null);

  const onCreateTodo = (todo) => {
    setTasks([...tasks, todo]);
  };

  const onDeleteTodo = (todoId) => {
    setTasks(tasks.filter(task => task.id !== todoId));
  };

  const findIndex = (todoId) => {
    setTaskEdit(tasks.find(task => task.id === todoId));
  };

  const onEdit = (data) => {
    setTasks(tasks.map(task => task.id === data.id ? data : task));
  }
  return (
    <Wrapper>
      <ActionBar
        isAddNew={isAddNew}
        onCreateTodo={onCreateTodo}
        setIsAddNew={setIsAddNew}
        taskEdit = {taskEdit}
        setTaskEdit = {setTaskEdit}
        onEdit = {onEdit}
        length={tasks.length > 0 ? tasks[tasks.length - 1].id : 0}
      />
      {tasks.map(({ id, title, content }) => (
        <TaskItem
          setIsAddNew={setIsAddNew}
          key={id}
          id={id}
          title={title}
          content={content}
          onDeleteTodo={onDeleteTodo}
          findIndex={findIndex}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

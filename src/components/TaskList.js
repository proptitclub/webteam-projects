import React, { useState } from "react";
import styled from "styled-components";
import { TaskItem } from "./TaskList/TaskItem";
import { ActionBar } from "./TaskList/ActionBar";

export const TaskList = () => {
  const [isAddNew, setIsAddNew] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "fwlefjeio",
      content: "blaogf",
    },
    {
      id: 2,
      title: "fwlefjeio",
      content: "blaogf",
    },
  ]);

  const onCreateTodo = (todo) => {
    setTasks([...tasks, todo]);
  };

  const onDeleteTodo = (todoId) => {
    setTasks(tasks.filter(({ id }) => id !== todoId));
  };

  const onEditTodo = (todoId) => {
    console.log("fefe");
  };

  return (
    <Wrapper>
      <ActionBar
        isAddNew={isAddNew}
        onCreateTodo={onCreateTodo}
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
          onEditTodo={onEditTodo}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

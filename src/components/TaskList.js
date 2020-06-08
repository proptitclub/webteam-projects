import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TaskItem } from "./TaskList/TaskItem";
import { ActionBar } from "./TaskList/ActionBar";

export const TaskList = () => {
  const [isAddNew, setIsAddNew] = useState(true);
  const [isSort, setIsSort] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "bb",
      content: "bb",
    },
    {
      id: 2,
      title: "aa",
      content: "aa",
    },
    {
      id: 3,
      title: "ac",
      content: "blaogf",
    },

  ]);
  // const [task, setTask] = useState(tasks);

  const onCreateTodo = (todo) => {
    setTasks([...tasks, todo]);
    // setTask([...tasks,todo]);
  };

  const onDeleteTodo = (todoId) => {
    setTasks(tasks.filter(({ id }) => id !== todoId));
  };

  const [ID, setID] = useState(null);
  const onEditTodo = (todoId) => {
    setID(todoId);
  };

  const submitEdit = (childData) => {
    var tmp = childData;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === ID) {
        tasks[i].content = tmp.content;
        tasks[i].title = tmp.title;
      }
    }
  }

  function compareAZ(a, b) {
    let com = 0;
    let titleA = a.title;
    let titleB = b.title;
    if (titleA > titleB) com = 1;
    else com = -1;
    return com;
  }


  const Sort = () => {
    // setTask(tasks);
    tasks.sort(compareAZ);
    // setTasks(task);
    // console.log(task);
  }

  // useEffect(() => {
  //   // setTask(tasks);
  //   // setTasks(task);
  // });

  return (
    <Wrapper>
      <ActionBar
        setIsAddNew={setIsAddNew}
        isAddNew={isAddNew}
        onCreateTodo={onCreateTodo}
        // length={size}
        length={tasks.length > 0 ? tasks[tasks.length - 1].id : 0}
        onEditTodo={submitEdit}
        Sort={Sort}
        setIsSort = {setIsSort}
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
          onEdit={submitEdit}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

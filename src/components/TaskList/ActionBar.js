import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./TaskItem";

export const ActionBar = ({ onCreateTodo, length, isAddNew }) => {
  const NewTodo = () => {
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const onChangeTitle = (event) => {
      setTitle(event.target.value);
    };
    const onChangeContent = (event) => {
      setContent(event.target.value);
    };
    const onSubmit = () => {
      onCreateTodo({
        id: length + 1,
        title,
        content,
      });
    };

    return (
      <>
        <Input
          type="text"
          onChange={onChangeTitle}
          name="title"
          placeholder="title"
        />
        <Input
          type="text"
          onChange={onChangeContent}
          name="content"
          placeholder="content"
        />
        <Button onClick={onSubmit}>
          {isAddNew ? "Add Todo" : "Edit Todo"}
        </Button>
        {!isAddNew && <Button onClick={onSubmit}>Add Todo</Button>}
      </>
    );
  };

  return (
    <Wrapper>
      <NewTodo
        onCreateTodo={onCreateTodo}
        length={length}
        isAddNew={isAddNew}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

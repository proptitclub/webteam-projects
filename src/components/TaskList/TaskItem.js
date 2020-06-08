import React, { useState } from "react";
import styled from "styled-components";

export const TaskItem = ({
  id,
  title,
  content,
  onDeleteTodo,
  onEditTodo,
  setIsAddNew,
  onEdit
}) => {
  const handleEditTodo = (id) => {
    // onEdit();
    onEditTodo(id);
    setIsAddNew(false);
  };

  return (
    <Wrapper>
      {id}: {title} - {content}{" "}
      <EditButton onClick={() => handleEditTodo(id)}>Edit</EditButton>
      <DeleteButton onClick={() => onDeleteTodo(id)}>Delete</DeleteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
`;

const DeleteButton = styled(Button)`
  background: red;
  border: 1px solid red;
`;

const EditButton = styled(Button)`
  background: yellow;
  border: 1px solid yellow;
  margin-right: 10px;
`;

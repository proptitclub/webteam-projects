import React from "react";
import styled from "styled-components";

export const TaskItem = ({
  id,
  title,
  content,
  onDeleteTodo,
  findIndex,
  setIsAddNew,
}) => {
  const handleEditTodo = (id) => {
    findIndex(id);
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
  width: 100px;
  height: 30px;
  background: blue;
  border: 1px solid black;
  border-radius: 10px;
`;

const DeleteButton = styled(Button)`
  width: 100px;
  height: 30px;
  background: red;
  border: 1px solid black;
  border-radius: 10px;
`;

const EditButton = styled(Button)`
  width: 100px;
  height: 30px;
  background: yellow;
  border: 1px solid black;
  margin-right: 10px;
  border-radius: 10px;
`;

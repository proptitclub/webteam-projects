import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NewTodo } from './NewTodo';

export const ActionBar = ({
  onCreateTodo,
  length,
  isAddNew,
  setIsAddNew,
  taskEdit,
  onEdit,
  setTaskEdit
}) => {
  return (
    <Wrapper>
      <NewTodo
        onCreateTodo={onCreateTodo}
        length ={length}
        isAddNew={isAddNew}
        taskEdit = {taskEdit}
        setIsAddNew = {setIsAddNew}
        onEdit = {onEdit}
        setTaskEdit = {setTaskEdit}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

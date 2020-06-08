import React, { useState } from "react";
import styled from "styled-components";
import { NewTodo } from "./NewTodo";

export const ActionBar = ({
  onCreateTodo,
  onSearchTodo,
  length,
  isAddNew,
  setIsAddNew,
  taskEdit,
  onEdit,
  setTaskEdit,
}) => {
  const [searchValue, setSearchValue] = useState(null);

  return (
    <Wrapper>
      <NewTodo
        onCreateTodo={onCreateTodo}
        length={length}
        isAddNew={isAddNew}
        taskEdit={taskEdit}
        setIsAddNew={setIsAddNew}
        onEdit={onEdit}
        setTaskEdit={setTaskEdit}
      />
      <br />
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button onClick={() => onSearchTodo(searchValue)}>Search</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

import React, { useState} from "react";
import styled from "styled-components";
import { Button } from "./TaskItem";

export const ActionBar = ({ onCreateTodo, 
                            length, 
                            setIsAddNew, 
                            isAddNew, 
                            onEditTodo, 
                            Sort,
                          setIsSort }) => {

  // this.onChangeSort = this.onChangeSort.bind(this);
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

    const onEdit = () => {
      setIsAddNew(true);
      const edit = {
        title,
        content,
      };
      onEditTodo(edit);
    };

    const onFind = () => {

    }

    const Exit = () => {
      setIsAddNew(true);
    }

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
        <Button onClick={isAddNew ? onSubmit : onEdit}>
          {isAddNew ? "Add Todo" : "Edit Todo"}
        </Button>
        {!isAddNew && <Button onClick={Exit}>Exit</Button>}<br></br>
        <Input
          type="text"
          name="find"
          placeholder="find..."
          onChange={onFind}
        />
        <Button>
          {"Find"}
        </Button>

        {/* {!isAddNew && <Button onClick={onSubmit}>Edit Todo</Button>} */}

      </>
    );
  };

  const SortAZ = () => {

    const onChangeSort = (event) => {
      if (event.target.value === "AZ")
        console.log(event.target.value);
      setIsSort(true);
      Sort();
      
    }

    return (
      <select onChange={onChangeSort}>
        <option value="0">sort</option>
        <option value="AZ">A->Z</option>
        <option value="ZA">Z->A</option>
      </select>
    );
  }

  return (
    <Wrapper>
      <NewTodo
        onCreateTodo={onCreateTodo}
        length={length}
        isAddNew={isAddNew}
      />
      <SortAZ></SortAZ>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;
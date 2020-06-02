import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./TaskItem";

export const NewTodo = ({
    onCreateTodo,
    length,
    isAddNew,
    setIsAddNew,
    taskEdit,
    onEdit,
    setTaskEdit
}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (taskEdit !== null) {
            setTitle(taskEdit.title);
            setContent(taskEdit.content);
        }
        else {
            setTitle('');
            setContent('');
        }
    }, [taskEdit])

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
    const onChangeContent = (event) => {
        setContent(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (taskEdit !== null) {
            onEdit({
                id : taskEdit.id,
                title,
                content
            })
            setTaskEdit(null);
        }
        else {
            onCreateTodo({
                id: length + 1,
                title,
                content,
            });
            setTitle('');
            setContent('');
        }
        setIsAddNew(true);
    };
    const onExit = () => {
        setTitle('');
        setContent('');
        setIsAddNew(true);
    };
    return (
        <>
            <Label>Tiêu đề:</Label>
            <Input
                type="text"
                onChange={onChangeTitle}
                name="title"
                placeholder="Title"
                value = {title}
            />
            <br />
            <Label>Nội dung:</Label>
            <Input
                type="text"
                onChange={onChangeContent}
                name="content"
                placeholder="Content"
                value = {content}
            />
            <br />
            <Button onClick={onSubmit}>{isAddNew ? 'Add Todo' : 'Save'}</Button>
            {!isAddNew && <Button onClick={onExit}>Cancel</Button>}
        </>
    );
};

const Label = styled.label``;

const Input = styled.input`
margin-bottom: 10px;
width: 300px;
height: 30px;
border-radius: 10px;
margin-left: 10px;
`;
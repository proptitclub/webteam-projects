import React from "react";
import styled from "styled-components";
import "./App.css";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Title>Todo List</Title>
      <TaskList />
    </div>
  );
}

export default App;

const Title = styled.h1``;

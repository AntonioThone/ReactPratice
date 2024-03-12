import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

const task = {
  id: 0,
  title: "Nova tarefa",
  state: "pendente"
}

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className = "container">
        <TaskList title="Pendete" />
        <TaskList title="Fazendo" />
        <TaskList title="Completa" />
      </div>
    </div>
  );
}

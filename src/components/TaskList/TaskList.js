import React, { useState } from "react";
import "./TaskList.css";
import PropTypes from "prop-types";



export default function TaskList({ title }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((currentCount)  => {
      return currentCount + 1;
    })
  }

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
        {count}
        <button onClick={increment}>incrementar</button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired
}
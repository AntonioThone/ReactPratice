import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";

export default function TaskList({ title }) {
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
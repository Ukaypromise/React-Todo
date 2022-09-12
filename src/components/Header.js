/* eslint-disable */
import React from "react";
import Button from "./Button";

const Header = (props) => {
  const { title, onToggle, showAdd } = props;

  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color="blue" text={showAdd ? "close" : "Add Task"} onClick={onToggle} />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

export default Header;

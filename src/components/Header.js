import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
const onClick =()=>{
    console.log('Click');
}

  return (
    <div className="header">
      <h1>{title}</h1>
      <Button color='blue' onClick={onClick} text='Add Task'/>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

export default Header;

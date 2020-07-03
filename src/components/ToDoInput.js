import React, { useState } from "react";

const ToDoInput = () => {
  const [toDo, setToDo] = useState("");

  const handleChange = (e) => {
    setToDo(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(toDo);
    e.prevetDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="toDo" value={toDo} onChange={handleChange} />
    </form>
  );
};

export default ToDoInput;

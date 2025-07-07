import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Count = () => {
  // let count =1;
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const [trial, setTrial] = useState(0);
  useEffect(() => {
    alert("use effect is running");
  }, [trial]);

  const sum = () => {
    setCount(count + 1);
    setTrial(trial + 1);
    console.log(count);
  };
  const sub = () => {
    setCount(count - 1);
    console.log(count);
  };
  const handleClick =()=>{
    navigate('/')
  }
  return (
    <div>
      <div>
        <h1>The value of count is {count}</h1>
      </div>
      <div>
        <h1 onClick={sum}>Add count + </h1>
      </div>
      <div>
        <h1 onClick={sub}>Sub count - </h1>
      </div>
      <div>
        <h1 onClick={handleClick}>Go to home</h1>
      </div>    
    </div>
  );
};

export default Count;

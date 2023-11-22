import React from "react";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleBtnClick = () => {
    alert(inputValue);
    setInputValue("");
  };
  const handleInputChanged = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>커스텀 훅 없이 구현</h1>
      <input type="text" onChange={handleInputChanged} value={inputValue} />
      <button onClick={handleBtnClick}>확인</button>
    </div>
  );
};

export default Home;

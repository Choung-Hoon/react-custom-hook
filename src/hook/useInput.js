import { useState } from "react";

// use로 시작하는 함수 작성
export function useInput(initialValue, callback) {
  const [inputValue, setInputValue, displayMessage] = useState(initialValue);

  const handleChanged = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    setInputValue(inputValue);
    callback(inputValue);
  };

  return [inputValue, handleChanged, handleSubmit];
}

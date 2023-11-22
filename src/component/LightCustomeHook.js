import { useInput } from "../hook/useInput";

function displayMessage(message) {
  alert(message);
}

const LightCustomeHook = () => {
  console.log("커스텀 훅(useInput)을 이용하여 input요소의 기본 기능과 상태 관리를 한다.");
  const [inputValue, handleChanged, handleSubmit] = useInput("", displayMessage);

  return (
    <div>
      <h1>Simple custom hook(useInput)</h1>
      <input type="text" onChange={handleChanged} value={inputValue} />
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};

export default LightCustomeHook;

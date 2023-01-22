import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs;
  const nameRef = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };
  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameRef.current.focus();
  };
  return (
    <div>
      <input
        placeholder="이름"
        name="name"
        onChange={onChange}
        value={name}
        ref={nameRef}
      />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: 이름(닉네임)</b>
      </div>
    </div>
  );
}

export default InputSample;

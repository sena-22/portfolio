import { useState, useEffect } from "react";
import styled from "styled-components";

import Nav from "../components/Nav";

const Container = styled.div`
  background-color: #292929;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  margin-left: 200px;
  width: 100%;
  height: 100%;
  position: relative;
  border-left: 0.5px solid rgba(255, 255, 255, 0.2);

  > h1 {
    font: bold 50px "IM_Hyemin-Bold";
    position: absolute;
    top: 15%;
    left: 20%;
    color: #bb88ed;

    :hover {
    }
  }

  .input {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 50%;
    top: 30%;
    left: 20%;
    font: bold 15px "IM_Hyemin-Bold";
  }

  .input label {
    margin-bottom: 5px;
  }

  .input input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font: bold 13px "IM_Hyemin-Bold";
    background-color: #4d4c4c;
    color: #8d8d8d;

    resize: none;
    outline: none;
    border: none;
    border-radius: 2px;
    display: block;

    :focus + span {
      width: 100%;
    }
  }

  .input textarea {
    height: 150px;
  }

  .input span {
    box-sizing: border-box;
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
    width: 0;
    height: 2px;
    margin-bottom: 14px;
    transition: all 0.3s;
  }

  button {
    position: absolute;
    top: 80%;
    left: 55%;
    border: 1px solid #bb88ed;
    padding: 10px;
    width: 15%;
    border-radius: 2px;
    background-color: transparent;
    color: #bb88ed;
    cursor: pointer;
    font: 20px "poor story";
    letter-spacing: 2px;
    display: block;

    :hover {
      background-image: linear-gradient(to left, #a18cd1 0%, #fbc2eb 100%);
      color: #ffffff;
      transition: all 0.5s;
    }
  }
`;

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input
        typeof={type}
        name={name}
        value={value}
        required
        onChange={onChange}
        autoComplete="off"
      ></input>
      <span></span>
    </>
  );
};

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = () => {
    //이메일 유효성 검사
    if (window.confirm("이메일을 전송하시겠습니까?")) {
      console.log(name);
      //이메일 전송!
      onReset();
    }
  };

  const onReset = () => {
    setInputs({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container>
      <Nav />
      <Main>
        <h1>Contact me</h1>
        <div className="input">
          <Input
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
          <Input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={onChange}
          />
          <Input
            label="Subject"
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={onChange}
            autoComplete="off"
          ></textarea>
          <span></span>
        </div>
        <button type="reset" onClick={onSubmit}>
          Send message
        </button>
      </Main>
    </Container>
  );
};

export default Contact;

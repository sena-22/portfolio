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
    color: #fff;

    :hover {
      text-shadow: 0 0 10px #bb88ed;
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

const Contact = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <h1>Contact me</h1>
        <div className="input">
          <label>Name</label>
          <input typeof="email" required></input>
          <span></span>
          <label>Email</label>
          <input typeof="text"></input>
          <span></span>
          <label>Subject</label>
          <input typeof="text"></input>
          <span></span>
          <label>Message</label>
          <textarea></textarea>
          <span></span>
        </div>
        <button>Send message</button>
      </Main>
    </Container>
  );
};

export default Contact;

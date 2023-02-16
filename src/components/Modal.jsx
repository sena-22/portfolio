import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
`;

const ModalWrapper = styled.div`
  padding: 30px;
  width: 900px;
  height: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31),
    0px 8px 12px rgba(9, 30, 66, 0.15);
  .meta {
    text-align: center;

    h1 {
      margin-top: 20px;
      margin-bottom: 10px;
      font: bold 50px "Poor story";
      color: #393939;
    }

    p {
      font: bold 20px "Poor story";
      margin-bottom: 60px;
      color: #393939a1;
    }

    div {
      font: 19px "sans-serif";
      color: #393939;
      padding: 0 60px;
      text-align: left;
    }
  }
  .con {
    display: flex;
    flex-direction: row;
    color: #393939;
    margin-left: 30px;

    .con_left {
      margin-left: 30px;

      p {
        font: bold 25px "sans-serif";
        margin: 40px 0;
        height: 10%;
      }
    }

    .con_right {
      p {
        font: 20px/1.5 "Noto Sans KR";
        font-weight: 600;
        margin: 40px 0;
        margin-left: 40px;
        height: 10%;
        color: #393939;
      }
    }
  }
`;

const Modal = ({ handleModal, currentMetaData }) => {
  const { title, date, description, mainFunction, repository, url, stack } =
    currentMetaData[0];
  console.log(title);
  return (
    <ModalContainer onClick={handleModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <div className="meta">
          <h1>{title}</h1>
          <p>{date}</p>
          <div>{description}</div>
        </div>
        <div className="con">
          <div className="con_left">
            <p>주요 기능</p>
            <p>Github</p>
            {url && <p>URL</p>}
            <p>Stack</p>
          </div>
          <div className="con_right">
            <p>{mainFunction}</p>
            <p>{repository}</p>
            {url && <p>{url}</p>}
            <p>{stack}</p>
          </div>
        </div>
      </ModalWrapper>
    </ModalContainer>
  );
};
export default Modal;

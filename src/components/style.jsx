import styled from 'styled-components'

/* Nav */
export const NavContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  border-right: 0.5px solid rgba(255, 255, 255, 0.2);
`

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin: 50px 65px 100px;
  cursor: pointer;
`
export const NavList = styled.div`
  text-align: center;
  & div {
    color: #a6a6b2;
    font-size: 17px;
    padding: 20px 0;
    font-family: 'Nunito Sans';
    transition: all 0.5s;
    cursor: pointer;
    :hover {
      color: #bb88ed;
    }
  }
`

export const Links = styled.div`
  position: absolute;
  top: 90%;
  left: 15%;
  > span {
    font-size: 28px;
    transition: all 0.5s;
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      font-size: 33px;
    }
  }
`

/* Modal */
export const ModalContainer = styled.div`
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
`

export const ModalWrapper = styled.div`
  padding: 30px;
  width: 900px;
  height: 600px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 8px 12px rgba(9, 30, 66, 0.15);
  .meta {
    text-align: center;
    h1 {
      margin-top: 20px;
      margin-bottom: 10px;
      font: bold 50px 'Poor story';
      color: #393939;
    }
    p {
      font: bold 20px 'Poor story';
      margin-bottom: 60px;
      color: #393939a1;
    }
    div {
      font: 19px 'sans-serif';
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
        font: bold 25px 'sans-serif';
        margin: 40px 0;
        height: 10%;
      }
    }
    .con_right {
      p {
        font: 20px/1.5 'Noto Sans KR';
        font-weight: 600;
        margin: 40px 0;
        margin-left: 40px;
        height: 10%;
        color: #393939;
        :nth-of-type(2),
        :nth-of-type(3) {
          cursor: pointer;
          color: #3e3eec;
        }
      }
    }
  }
`

import styled from 'styled-components'

/* About */

export const AboutContainer = styled.div``

export const AboutMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 70px;
  font-family: 'Source Code Pro', monospace;

  > p {
    font: bold 24px 'Source Code Pro', monospace;
    color: #bb88ed;
  }
`

export const AboutTopSection = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 50px;

  .box {
    width: 460px;
    height: 260px;
    background-color: #fff;
    color: #000;
    margin: 20px 30px 40px 0;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box--title {
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  .box--content--channer {
    font-size: 18px;

    div {
      margin-bottom: 60px;
    }

    div > span {
      margin-right: 30px;
    }

    div > span:nth-child(2) {
      cursor: pointer;
      color: slateblue;
      text-decoration: underline;
    }
  }

  .box--content--education {
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:nth-child(1) {
      font-size: 17px;
      margin-bottom: 25px;
      margin-top: 15px;
    }

    > div:nth-child(2) {
      font-size: 19px;
      margin-bottom: 20px;
    }
  }
`

export const AboutBottomSection = styled.section`
  display: flex;
  font-size: 15px;

  > div > span:nth-child(1) {
    color: #bb88ed;
  }

  > div > span:nth-child(2) {
    margin-left: 2px;
    margin-right: 15px;
    letter-spacing: normal;
  }
`

/* Project - Article */

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 50px;
  margin-left: 65px;
  margin-right: -100px;
  cursor: pointer;
  position: fixed;
`

export const ArticleContainer = styled.div`
  width: 50%;
  height: ${props => props.height || null};
  float: left;
  box-sizing: border-box;
  padding: 12px;
  border-left: 0.5px solid rgba(255, 255, 255, 0.2);
`

export const Inner = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 14px;
  cursor: pointer;
  filter: saturate(40%);

  :hover {
    filter: saturate(120%);
  }

  video {
    width: 100%;
    height: ${props => props.height || null};
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font: bold 18px/1 'Source Code Pro', monospace;
    color: #444;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
  }

  p {
    font: 13px 'Source Code Pro', monospace;
    color: #777;
    margin-bottom: 10px;
    text-align: center;
    padding: 0 20px;
  }
`

/* Project */

export const ProjectSection = styled.section`
  width: 100%;
  margin-left: 200px;
`

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  position: relative;

  > button {
    border: none;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    z-index: 5;
    position: fixed;
    border-radius: 50%;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;

    :hover {
      background-color: #ba88eda4;
    }
  }
  > button:nth-of-type(1) {
    top: 80%;
    left: 40px;
  }

  > button:nth-of-type(2) {
    top: 80%;
    left: 110px;
  }

  > button:nth-of-type(3) {
    top: 90%;
    left: 90%;
    width: 100px;
    height: 100px;
    font: 20px/1 'Source Code Pro', monospace;
    background-color: #bb88ed;
    border-radius: 50%;

    :hover {
      background-color: #30004c9f;
    }
  }
`

/* Contact */

export const ContactContainer = styled.div`
  min-height: 800px;
`

export const ContactMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  > p {
    padding: 70px;
    font: bold 24px 'Source Code Pro', monospace;
    color: #bb88ed;
  }

  .input {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 50%;
    left: 10%;
    font: bold 20px 'Source Code Pro', monospace;
  }

  .input label {
    margin-bottom: 5px;
    font: 20px 'Source Code Pro', monospace;
  }

  .input input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    font: 16px 'Source Code Pro', monospace;
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

  .input button {
    position: absolute;
    top: 100%;
    left: 85%;
    border: 1px solid #bb88ed;
    padding: 10px;
    width: 15%;
    border-radius: 2px;
    background-color: transparent;
    color: #bb88ed;
    cursor: pointer;
    font: 15px 'Source Code Pro', monospace;
    letter-spacing: 2px;

    :hover {
      background-image: linear-gradient(to left, #a18cd1 0%, #fbc2eb 100%);
      color: #ffffff;
      transition: all 0.5s;
    }
  }
`
/* ProjectList */

export const ProjectListContainer = styled.div`
  p,
  section {
    padding: 70px;
    box-sizing: border-box;
    width: 80%;
  }

  p {
    font: bold 24px 'Source Code Pro', monospace;
    color: #bb88ed;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: end;

    .left--section {
      width: 70%;
      height: 300px;
      background-color: #bb88ed;
      margin-right: 20px;
      cursor: pointer;
      > img {
        width: 100%;
        height: 100%;
      }
    }

    .right--section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font: 13px 'Source Code Pro', monospace;

      > div {
        margin: 10px 0;
      }

      > div:first-child {
        color: #bb88ed;
        font-size: 15px;
      }

      .title {
        font: bold 25px 'Source Code Pro', monospace;
        cursor: pointer;

        :hover {
          color: #bb88ed;
        }
      }

      .desc {
        padding: 25px 30px;
        margin-left: -100px;
        background-color: #605d64ec;
        border-radius: 7px;
        word-wrap: break-word;
      }

      .stacks {
        font-size: 14px;
        text-align: end;
      }

      .links {
        > span {
          cursor: pointer;
          margin-left: 20px;
          font-size: 17px;
          :hover {
            color: #bb88ed;
          }
        }
      }
    }
  }
`

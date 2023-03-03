import styled from 'styled-components'

/* About */

export const AboutContainer = styled.div``

export const AboutMain = styled.div`
  box-sizing: border-box;

  position: relative;
  display: flex;
  flex-direction: row;
  padding: 70px;
`

export const AboutLeftSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100vh;
  position: relative;

  > p {
    font: bold 24px 'Source Code Pro', monospace;
    color: #bb88ed;
  }
`

export const AboutRightSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100vh;
  position: relative;
  margin-left: 50px;
  box-sizing: border-box;

  > div {
    position: absolute;

    :nth-of-type(1) {
      top: 10%;
    }

    :nth-of-type(2) {
      top: 40%;
    }

    :hover p {
      text-shadow: 0 0 10px #bb88ed;
    }
    > p {
      font: 20px;
      margin: 15px 0;
      font: 25px 'Source Code Pro', monospace;
      text-align: center;
    }
  }

  > div > .con {
    display: flex;
    flex-direction: row;
  }

  .article__bottom {
    display: flex;

    > div {
      display: flex;
      flex-direction: column;

      > p {
        margin-bottom: 10px;
        text-align: center;
        font: 17px 'Source Code Pro', monospace;
      }

      > .con {
        display: flex;
      }
    }
  }
`

export const AboutArticle = styled.article`
  margin-right: 20px;
  height: 100px;
  width: 100px;
  border-radius: 4px;
  text-align: center;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    padding: 3px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 15px 'Source Code Pro', monospace;
    color: #fff;
    border-radius: 3px;
    transition: 0.7s;
    backface-visibility: hidden;
  }

  .front {
    background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
  }
  .back {
    background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
    transform: rotateY(180deg);
  }
`
/* Project - Article */

export const ArticleContainer = styled.div`
  width: 50%;
  height: ${props => props.height || null};
  float: left;
  box-sizing: border-box;
  padding: 12px;
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
    background-color: #ba88eda4;
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

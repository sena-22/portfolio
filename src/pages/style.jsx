import styled from 'styled-components'
/* Home */
export const Main = styled.main`
  width: 100%;
  height: 100%;
  perspective: 1200px;
  background: linear-gradient(to top, #1a0a2c 0%, #634184 100%);
  position: fixed;

  > img {
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
`
export const Section = styled.section`
  width: 600px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -400px;
  margin-left: -300px;
  transform-style: preserve-3d;
  animation: ani linear 15s infinite;

  &:hover {
    animation-play-state: paused;
  }

  /* 3d layout */
  .box1 {
    transform: rotateY(20deg) translateZ(-764px);
  }
  .box2 {
    transform: rotateY(65deg) translateZ(-764px);
  }
  .box3 {
    transform: rotateY(-25deg) translateZ(-764px);
  }
  .box4 {
    transform: rotateY(-70deg) translateZ(-764px);
  }

  @keyframes ani {
    0% {
      transform: rotateY(0deg);
    }
    25% {
      transform: rotateY(30deg);
    }
    50% {
      transform: rotateY(0deg);
    }
    75% {
      transform: rotateY(-30deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }
`

export const Article = styled.article`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  backface-visibility: hidden;

  h1 {
    position: absolute;
    left: 0px;
    top: 0px;
    font-size: 35px;
    transition: all 0.5s;
    opacity: 0;
    font-family: 'IM_Hyemin-Bold';

    &::after {
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      transition: all 0.25s;
      content: '';
    }

    &::after {
      bottom: 0;
      transform: translate(0, 100%);
    }
  }

  :hover h1 {
    top: -75px;
    opacity: 1;
    text-shadow: 3px 3px 15px #bb88ed;

    &::after {
      background: #bb88ed;
      box-shadow: 3px 3px 15px #bb88ed;
      transform: translate(0, 0);
    }
  }

  .inner {
    width: 100%;
    height: 100%;
  }

  .inner > div {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.06);
    padding: 50px;
    position: relative;
    opacity: 0.8;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.5s;

    :hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.03);
      opacity: 1;
    }
  }

  /* box1 */
  &.box1 .inner > div .inner__meta {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  &.box1 .inner > div img {
    width: 300px;
    height: 300px;
    margin-top: 20px;
    margin-bottom: 100px;
  }

  &.box1 .inner > div h2 {
    font-size: 40px;
    margin-bottom: 10px;
    font-family: 'IM_Hyemin-Bold';
  }

  &.box1 .inner > div .inner__meta p {
    font-size: 35px;
    margin-bottom: 50px;
    font-family: 'Poor Story', cursive;
  }

  &.box1 .inner:hover > div .inner__meta h2,
  &.box1 .inner:hover > div .inner__meta p {
    text-shadow: 0 0 10px #bb88ed;
  }

  &.box1 .inner > div .inner__link {
    position: absolute;
    top: 4%;
    left: 75%;
  }

  &.box1 .inner > div .inner__link .inner__link__icon {
    font-size: 28px;
    margin-bottom: 30px;
    margin-left: 30px;
    transition: all 0.5s;

    &:hover {
      font-size: 33px;
    }
  }

  /* box2 */

  &.box2 .inner > div {
    width: 100%;
    height: 185px;
    margin-bottom: 20px;

    &:hover h2,
    &:hover span {
      text-shadow: 5px 0px 20px #bb88ed;
      transition: all 1.5s;
      color: #bb88ed;
    }
  }

  &.box2 .inner > div span > * {
    width: 15%;
    height: 100%;
    border-right: 1px solid #bbb;
    float: left;
    color: #fff;
    position: relative;
    box-sizing: border-box;
    padding-right: 25px;
  }

  &.box2 .inner > div .con {
    width: 85%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 40px;
    float: right;
    font-weight: bold;
    font-family: 'IM_Hyemin-Bold';
  }

  &.box2 .inner > div .con p {
    font: bold 25px 'poor story';
    color: #c2c2c2;
    overflow-wrap: break-word;
  }

  /* box3 */

  &.box3 .inner > div {
    width: 100%;
    height: 253px;
    margin-bottom: 20px;
  }

  &.box3 .inner > div .pic {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;
    position: relative;
    top: 15px;
  }

  &.box3 .inner > div:nth-of-type(2) .pic {
    width: 120px;
    height: 120px;
    margin-right: -10px;
  }

  &.box3 .inner > div .con {
    width: 340px;
    float: right;
  }

  &.box3 .inner > div .con h2 {
    color: #fff;
    font: bold 30px 'IM_Hyemin-Bold';
  }

  &.box3 .inner > div:hover .con h2 {
    text-shadow: 0 0 10px #bb88ed;
  }

  &.box3 .inner > div .con p {
    font: bold 27px 'poor story';
    color: #c2c2c2;
    margin-top: 22px;
    overflow-wrap: break-word;
  }

  &.box3 .inner > div .con span {
    position: absolute;
    bottom: 50px;
    right: 50px;
    font: bold 22px 'poor story';
  }

  /* box 4*/

  &.box4 .inner > div:nth-of-type(1) {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &.box4 .inner > div:nth-of-type(1) .icon {
    color: #fff;
    font-size: 200px;
    opacity: 0.9;
    margin-bottom: 30px;
  }

  &.box4 .inner > div:nth-of-type(1) h2 {
    font-weight: bold;
    font-size: 40px;
    font-family: 'IM_Hyemin-Bold';
  }

  &.box4 .inner > div:nth-of-type(2) {
    font: bold normal 30px 'IM_Hyemin-Bold';
    width: 290px;
    height: 380px;
    margin-right: 20px;
    float: left;
    text-align: center;
  }

  &.box4 .inner > div:nth-of-type(2) .icon {
    font-size: 120px;
    color: #fff;
    opacity: 0.8;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  &.box4 .inner > div:nth-of-type(2) h2 {
    margin-top: 30px;
    margin-bottom: 14px;
    font: bold 40px 'IM_Hyemin-Bold';
  }

  &.box4 .inner > div:nth-of-type(3) {
    width: 290px;
    height: 380px;
    text-align: center;
    font: bold normal 30px 'IM_Hyemin-Bold';
  }

  &.box4 .inner > div:nth-of-type(3) .icon {
    font-size: 120px;
    color: #fff;
    opacity: 0.8;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  &.box4 .inner > div:nth-of-type(3) h2 {
    margin-top: 30px;
    margin-bottom: 14px;
    font: bold 40px 'IM_Hyemin-Bold';
  }

  &.box4 .inner > div:hover h2 {
    text-shadow: 5px 0 10px #bb88ed;
  }
`
/* About */

export const AboutContainer = styled.div``

export const AboutMain = styled.div`
  margin-left: 200px;
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
    font: bold 20px/1 'IM_Hyemin-Bold';
    color: #444;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
  }

  p {
    font: 13px 'IM_Hyemin-Bold';
    color: #777;
    margin-bottom: 10px;
    text-align: center;
    padding: 0 20px;
  }
`

/* Project */
export const Container = styled.div`
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
    font-size: 20px;
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
    font: 27px/1 'poor story';
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
  margin-left: 200px;
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

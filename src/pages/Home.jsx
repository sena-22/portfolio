import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import moon from "../img/moon.png";
import stackOverflow from "../img/stack-overflow.png";
import cuteBird from "../img/cute_bird.png";

const Main = styled.main`
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
`;
const Section = styled.section`
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
`;

const Article = styled.article`
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
    font-family: "IM_Hyemin-Bold";

    &::after {
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      transition: all 0.25s;
      content: "";
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
    font-family: "IM_Hyemin-Bold";
  }

  &.box1 .inner > div .inner__meta p {
    font-size: 35px;
    margin-bottom: 50px;
    font-family: "Poor Story", cursive;
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
    font-family: "IM_Hyemin-Bold";
  }

  &.box2 .inner > div .con p {
    font: bold 25px "poor story";
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
    font: bold 30px "IM_Hyemin-Bold";
  }

  &.box3 .inner > div:hover .con h2 {
    text-shadow: 0 0 10px #bb88ed;
  }

  &.box3 .inner > div .con p {
    font: bold 27px "poor story";
    color: #c2c2c2;
    margin-top: 20px;
    overflow-wrap: break-word;
  }

  &.box3 .inner > div .con span {
    position: absolute;
    bottom: 50px;
    right: 50px;
    font: 20px "poor story";
    color: #bb88ed;
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
    font-family: "IM_Hyemin-Bold";
  }

  &.box4 .inner > div:nth-of-type(2) {
    font: bold normal 30px "IM_Hyemin-Bold";
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
    font: bold 40px "IM_Hyemin-Bold";
  }

  &.box4 .inner > div:nth-of-type(3) {
    width: 290px;
    height: 380px;
    text-align: center;
    font: bold normal 30px "IM_Hyemin-Bold";
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
    font: bold 40px "IM_Hyemin-Bold";
  }

  &.box4 .inner > div:hover h2 {
    text-shadow: 5px 0 10px #bb88ed;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const Box2 = (props) => {
    return (
      <div>
        <span>
          <FontAwesomeIcon icon={props.icon} />
        </span>
        <div className="con">
          <h2>{props.title}</h2>
          <p>{props.con}</p>
        </div>
      </div>
    );
  };

  const box2contents = [
    {
      icon: faReact,
      title: "React",
      con: "React 라이브러리를 이용한 개인 프로젝트 및 팀 프로젝트 진행",
    },
    {
      icon: faSquareJs,
      title: "Javascript",
      con: "ES6+ 기반으로 학습",
    },
    {
      icon: faHtml5,
      title: "HTML",
      con: "HTML의 기본 문법 학습 및 활용 경험",
    },
    {
      icon: faCss3,
      title: "CSS",
      con: "CSS 및 styled-components를 이용한 스타일 적용 경험",
    },
  ];

  const box3contents = [
    {
      src: moon,
      title: "Front-line Developer",
      con: "미니 프로젝트로 개발한 포트폴리오 페이지",
      date: "2023-02 (1인/1주)",
    },
    {
      src: cuteBird,
      title: "Treedom",
      con: "여행 일정 기록 & 공유 서비스",
      date: "2023-1 ~ 2023-2 (7인/4주)",
    },
    {
      src: stackOverflow,
      title: "Stack Overflow",
      con: "Stack Overflow 클론 코딩 프로젝트",
      date: "2023-02 (6인/2주)",
    },
  ];

  const box4contents = [
    {
      icon: faEnvelope,
      title: "Contact Me",
      nav: "contact",
    },
    {
      icon: faGithub,
      title: "Github",
      url: "https://github.com/sena-22",
    },
    {
      icon: faBlog,
      title: "Blog",
      url: "https://sena-22.github.io/",
    },
  ];

  const Box3 = (props) => {
    return (
      <div onClick={() => handleNavigate(`/project/${props.idx}`)}>
        <img className="pic" src={props.src} />
        <div className="con">
          <h2>{props.title}</h2>
          <p>{props.con}</p>
          <span>{props.date}</span>
        </div>
      </div>
    );
  };

  const Box4 = (props) => {
    return (
      <div
        onClick={() =>
          props.nav
            ? handleNavigate(`/${props.nav}`)
            : handleOpenLink(props.url)
        }
      >
        <FontAwesomeIcon className="icon" icon={props.icon} />
        <h2>{props.title}</h2>
      </div>
    );
  };

  const handleNavigate = (nav) => {
    navigate(nav);
  };

  const handleOpenLink = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Main>
        <Section className="section">
          <Article className="box1" onClick={() => navigate(`/about`)}>
            <h1>Profile</h1>
            <div className="inner">
              <div>
                <div className="inner__meta">
                  <img src={moon} alt="profile_image" />
                  <h2>김현정</h2>
                  <p>Frontend Developer</p>
                </div>
                <div className="inner__link">
                  <span className="inner__link__icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </span>
                  <span className="inner__link__icon">
                    <FontAwesomeIcon icon={faBlog} />
                  </span>
                </div>
              </div>
            </div>
          </Article>
          <Article className="box2">
            <h1>Stack</h1>
            <div className="inner">
              {box2contents.map((con, idx) => (
                <Box2
                  key={idx}
                  icon={con.icon}
                  title={con.title}
                  con={con.con}
                />
              ))}
            </div>
          </Article>
          <Article className="box3">
            <h1>Project</h1>
            <div className="inner">
              {box3contents.map((con, idx) => (
                <Box3
                  key={idx}
                  src={con.src}
                  title={con.title}
                  con={con.con}
                  date={con.date}
                  idx={idx}
                />
              ))}
            </div>
          </Article>
          <Article className="box4">
            <h1>Contact</h1>
            <div className="inner">
              {box4contents.map((con, idx) => (
                <Box4
                  key={idx}
                  icon={con.icon}
                  title={con.title}
                  nav={con.nav && con.nav}
                  url={con.url && con.url}
                />
              ))}
            </div>
          </Article>
        </Section>
      </Main>
    </>
  );
};

export default Home;

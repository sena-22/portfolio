import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import Nav from "../components/Nav";

const Container = styled.div`
  background-color: #292929;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const Main = styled.div`
  box-sizing: border-box;
  margin-left: 200px;
  position: relative;
  border-left: 0.5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
  padding: 70px;
`;

const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100vh;
  position: relative;

  > h1 {
    font: bold 30px "poor story";
    color: #bb88ed;
    position: absolute;
    top: 10%;
  }

  div {
    position: absolute;
    top: 15%;

    > h1 {
      margin-top: 10px;
    }
  }

  p {
    position: absolute;
    top: 25%;
    font: 20px "poor story";
    padding: 20px 0;
  }
`;

const RightSection = styled.section`
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
      font: 40px;
      margin: 15px 0;
      font: 20px "poor story";
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
        font: 20px "poor story";
      }

      > .con {
        display: flex;
      }
    }
  }
`;

const Article = styled.article`
  margin-right: 20px;
  height: 100px;
  width: 100px;
  border-radius: 4px;
  text-align: center;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;

  .front,
  .back {
    width: 100%;
    height: 100%;
    padding: 3px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 20px "poor story";
    color: #fff;
    border-radius: 3px;
    transition: 0.7s;
    backface-visibility: hidden;
  }

  .front {
    background-image: linear-gradient(
      to top,
      #a7a6cb 0%,
      #8989ba 52%,
      #8989ba 100%
    );
  }
  .back {
    background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);
    transform: rotateY(180deg);
  }

  &:hover {
    transform: rotateY(180deg);
  }
`;

const About = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <LeftSection>
          <h1>ABOUT</h1>
          <div>
            <TypeAnimation
              sequence={[
                "Developer",
                3000,
                "Problem solver",
                3000,
                "Kim hyun jung",
                3000,
              ]}
              speed={1}
              style={{
                fontSize: "3rem",
                fontFamily: "poor story",
                letterSpacing: "5px",
              }}
              wrapper="h1"
              repeat={Infinity}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            fugit ut dolorem, hic facilis consectetur? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perferendis fugit ut dolorem, hic
            facilis consectetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis fugit ut dolorem, hic facilis
            consectetur?
          </p>
        </LeftSection>
        <RightSection>
          <div className="article__top">
            <p>front-end</p>
            <div className="con">
              <Article>
                <p className="front">React</p>
                <p className="back">React</p>
              </Article>
              <Article>
                <p className="front">HTML</p>
                <p className="back">HTML</p>
              </Article>
              <Article>
                <p className="front">CSS</p>
                <p className="back">CSS</p>
              </Article>
              <Article>
                <p className="front">
                  Javascript
                  <br />
                  (ES6+)
                </p>
                <p className="back">
                  Javascript
                  <br />
                  (ES6+)
                </p>
              </Article>
              <Article>
                <p className="front">Styled-components</p>
                <p className="back">Styled-components</p>
              </Article>
            </div>
          </div>
          <div className="article__bottom">
            <div className="left">
              <p>Version-control</p>
              <div className="con">
                <Article>
                  <p className="front">Git</p>
                  <p className="back">Git</p>
                </Article>
                <Article>
                  <p className="front">Github</p>
                  <p className="back">Github</p>
                </Article>
              </div>
            </div>
            <div className="right">
              <p>Communication</p>
              <div className="con">
                <Article>
                  <p className="front">Figma</p>
                  <p className="back">Figma</p>
                </Article>
                <Article>
                  <p className="front">discord</p>
                  <p className="back">discord</p>
                </Article>
              </div>
            </div>
          </div>
        </RightSection>
      </Main>
    </Container>
  );
};

export default About;

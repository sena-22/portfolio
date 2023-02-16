import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";
import Nav from "../components/Nav";

const Container = styled.div`
  background-color: #292929;
  width: 100%;
  height: 100%;
`;
const Main = styled.div`
  margin-left: 200px;
  width: 100%;
  height: 100%;
  position: relative;
  border-left: 0.5px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: row;
  padding: 70px;
`;
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
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
        <div className="right">
          <div>스택이 오면 좋을거같은데? `</div>
        </div>
      </Main>
    </Container>
  );
};

export default About;

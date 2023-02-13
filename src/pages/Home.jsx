import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
  perspective: 1300px;
  background-color: #1d1d1d;
  position:fixed;
`
const Section = styled.section`
  width:600px;
  height:800px;
  position:absolute;
  top:50%;
  left:50%;
  margin-top: -400px;
  margin-left: -300px;
`
const Article = styled.article`
  width:100%;
  height:100%;
  position:absolute;
  top:0px;
  left:0px;
      z-index: 2;

  h1 {
    position:absolute;
    left:0px;
    top:0px;
    font-size: 30px;
    transition: all 0.5s;
    opacity: 0;

    &::after {
      width: 100%;
      height: 3px;
      position: absolute;
      left: 0;
      background-color: transparent;
      transition: all 0.25s;
      content: "";
      z-index:1;
    }

    &::after {
      bottom: 0;
      transform: translate(0, 100%);
    }
  }

:hover h1{
  color: #fff;
     top:-75px;
         opacity: 1;

  &::before,
  &::after {
    background: pink;
    transform: translate(0, 0);
  }
}

  .inner {
    width: 100%;
    height: 100%;
  }

  .inner > div {
    width: 100%;
    height:100%;
    border:1px solid rgba(255,255,255,0.5);
    box-sizing: border-box;
    background:rgba(255,255,255,0.06);
    padding: 50px;
    position: relative;
    opacity: 0.8;
    overflow: hidden;
    cursor: pointer;
    transition:all 0.5s;
    :hover {
      background: rgba(255,255,255,0.15);
      transform: scale(1.03);
      opacity: 1;
    }
  }
`
const Home = () => {
  return (
    <>
      <Main>
        <Section>
          <Article className="box1">
            <h1>Profile</h1>
            <div className="inner">
              <div></div>
            </div>
          </Article>
          <Article className="box2">
            <h1>Stack</h1>
            <div className="inner">
              <div></div>
            </div>
          </Article>
          <Article claclassNamess="box3">
            <h1>Project</h1>
            <div className="inner">
              <div></div>
            </div>
          </Article>
          <Article claclassNamess="box4">     
            <h1>Contact</h1>
            <div className="inner">
              <div></div>
            </div>
          </Article>
        </Section>
      </Main>

    </>
  );
};

export default Home;

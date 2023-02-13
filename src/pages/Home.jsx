import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";

import moon from '../img/moon.png';

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
      transition: all 0.25s;
      content: "";
    }

    &::after {
      bottom: 0;
      transform: translate(0, 100%);
    }
  }

  :hover h1{
    top:-75px;
    opacity: 1;
    text-shadow: 3px 3px 15px  #BB88ED;

    &::after {
      background: #BB88ED;
      box-shadow: 3px 3px 15px  #BB88ED;
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

  /* box1 */
   &.box1 .inner > div .inner__meta {
      align-items: center;
      display: flex;
      flex-direction: column;
   }

  &.box1 .inner > div img {
    width:300px;
    height:300px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  
  &.box1 .inner > div h2 {
    font-size:40px;
    margin-bottom: 10px;
  }

  &.box1 .inner > div .inner__meta p {
    font-size:25px;
    margin-bottom: 50px;
  }

   &.box1 .inner:hover > div .inner__meta h2,
   &.box1 .inner:hover > div .inner__meta p {
    text-shadow:  3px 3px 10px  #BB88ED;
   }

  &.box1 .inner > div .inner__link  {
    position:absolute;
    top:90%;
    left:70%;
  }

  &.box1 .inner > div .inner__link .inner__link__icon {
    font-size: 30px;
    margin-bottom: 30px;
    margin-left: 30px;
    transition: all 0.5s;

    &:hover {
      font-size:33px;
      color:#BB88ED;
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
              <div>
                <div className="inner__meta">
                  <img src={moon} alt="profile_image"/>
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
          {/* <Article className="box2">
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
          </Article> */}
        </Section>
      </Main>

    </>
  );
};

export default Home;

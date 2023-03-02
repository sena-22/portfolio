import {TypeAnimation} from 'react-type-animation'
import CodeBlocks from '../components/CodeBlock'

import * as S from './style'

const About = () => {
  return (
    <S.AboutContainer id="about">
      <S.AboutMain>
        <S.AboutLeftSection>
          <h1>ABOUT</h1>
          <div>
            <TypeAnimation
              sequence={[
                'Developer',
                3000,
                'Problem solver',
                3000,
                'Kim hyun jung',
                3000
              ]}
              speed={1}
              style={{
                fontSize: '3rem',
                fontFamily: 'poor story',
                letterSpacing: '5px'
              }}
              wrapper="h1"
              repeat={Infinity}
            />
          </div>
          <div>
            <CodeBlocks />
          </div>
        </S.AboutLeftSection>
        <S.AboutRightSection>
          <div className="article__top">
            <p>front-end</p>
            <div className="con">
              <S.AboutArticle>
                <p className="front">React</p>
                <p className="back">React</p>
              </S.AboutArticle>
              <S.AboutArticle>
                <p className="front">HTML</p>
                <p className="back">HTML</p>
              </S.AboutArticle>
              <S.AboutArticle>
                <p className="front">CSS</p>
                <p className="back">CSS</p>
              </S.AboutArticle>
              <S.AboutArticle>
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
              </S.AboutArticle>
              <S.AboutArticle>
                <p className="front">Styled-components</p>
                <p className="back">Styled-components</p>
              </S.AboutArticle>
            </div>
          </div>
          <div className="article__bottom">
            <div className="left">
              <p>Version-control</p>
              <div className="con">
                <S.AboutArticle>
                  <p className="front">Git</p>
                  <p className="back">Git</p>
                </S.AboutArticle>
                <S.AboutArticle>
                  <p className="front">Github</p>
                  <p className="back">Github</p>
                </S.AboutArticle>
              </div>
            </div>
            <div className="right">
              <p>Communication</p>
              <div className="con">
                <S.AboutArticle>
                  <p className="front">Figma</p>
                  <p className="back">Figma</p>
                </S.AboutArticle>
                <S.AboutArticle>
                  <p className="front">discord</p>
                  <p className="back">discord</p>
                </S.AboutArticle>
              </div>
            </div>
          </div>
        </S.AboutRightSection>
      </S.AboutMain>
    </S.AboutContainer>
  )
}

export default About

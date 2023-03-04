import * as S from './style'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faBlog} from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const stackList = ['React', 'Javascript(ES6)', 'TypeScript', 'HTML5', 'CSS3']
  const channerList = [
    {
      icon: faGithub,
      link: 'https://github.com/sena-22'
    },
    {
      icon: faBlog,
      link: 'https://sena-22.github.io/'
    }
  ]

  const handleOpenLink = url => {
    window.location.href = url
  }

  return (
    <S.AboutContainer id="about">
      <S.AboutMain>
        <p>
          <span>01.</span>
          <span>about</span>
        </p>
        <S.AboutTopSection>
          <div className="box">
            <div className="box--title">Channel</div>
            <div className="box--content--channer">
              {channerList.map((channer, idx) => (
                <div key={idx}>
                  <span>
                    <FontAwesomeIcon icon={channer.icon} />
                  </span>
                  <span onClick={() => handleOpenLink(channer.link)}>{channer.link}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="box">
            <div className="box--title">Education</div>
            <div className="box--content--education">
              <div>2022.08 ~ 2023.02</div>
              <div>코드스테이츠(codestates) 프론트엔드 41기</div>
            </div>
          </div>
        </S.AboutTopSection>
        <S.AboutBottomSection>
          {stackList.map((stack, idx) => (
            <div key={idx}>
              <span>▹</span>
              <span>{stack}</span>
            </div>
          ))}
        </S.AboutBottomSection>
      </S.AboutMain>
    </S.AboutContainer>
  )
}

export default About

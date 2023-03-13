import {useNavigate} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faBlog, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faSquareJs} from '@fortawesome/free-brands-svg-icons'
import {faCss3} from '@fortawesome/free-brands-svg-icons'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'

import * as S from './style'

import moon from '../img/moon.png'
import stackOverflow from '../img/stack-overflow.png'
import cuteBird from '../img/cute_bird.png'

const Home = () => {
  const navigate = useNavigate()
  const Box2 = props => {
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
    )
  }

  const box2contents = [
    {
      icon: faReact,
      title: 'React',
      con: 'React를 이용한 개인 프로젝트 및 팀 프로젝트 진행'
    },
    {
      icon: faSquareJs,
      title: 'Javascript',
      con: 'ES6+'
    },
    {
      icon: faHtml5,
      title: 'HTML',
      con: 'HTML의 기본 문법 학습 및 활용 경험'
    },
    {
      icon: faCss3,
      title: 'CSS',
      con: 'CSS 및 styled-components를 이용한 스타일 적용 경험'
    }
  ]

  const box3contents = [
    {
      src: moon,
      title: 'Front-line Developer',
      con: '미니 프로젝트로 개발한 포트폴리오 페이지',
      date: '2023-02 (1인/1주)'
    },
    {
      src: cuteBird,
      title: 'Treedom',
      con: '여행 일정 기록 & 공유 서비스',
      date: '2023-1 ~ 2023-2 (7인/4주)'
    },
    {
      src: stackOverflow,
      title: 'Stack Overflow',
      con: 'Stack Overflow 클론 코딩 프로젝트',
      date: '2022-12 ~ 2022-12 (6인/2주)'
    }
  ]

  const box4contents = [
    {
      icon: faEnvelope,
      title: 'Contact Me',
      nav: 'contact'
    },
    {
      icon: faGithub,
      title: 'Github',
      url: 'https://github.com/sena-22'
    },
    {
      icon: faBlog,
      title: 'Blog',
      url: 'https://sena-22.github.io/'
    }
  ]

  const Box3 = props => {
    return (
      <div onClick={() => handleNavigate(`/project/${props.idx}`)}>
        <img className="pic" src={props.src} alt={props.title} />
        <div className="con">
          <h2>{props.title}</h2>
          <p>{props.con}</p>
          <span>{props.date}</span>
        </div>
      </div>
    )
  }

  const Box4 = props => {
    return (
      <div
        onClick={() =>
          props.nav ? handleNavigate(`/${props.nav}`) : handleOpenLink(props.url)
        }>
        <FontAwesomeIcon className="icon" icon={props.icon} />
        <h2>{props.title}</h2>
      </div>
    )
  }

  const handleNavigate = nav => {
    navigate(nav)
  }

  const handleOpenLink = url => {
    window.location.href = url
  }

  return (
    <>
      <S.Main>
        <S.Section className="section">
          <S.Article className="box1" onClick={() => navigate(`/about`)}>
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
          </S.Article>
          <S.Article className="box2">
            <h1>Stack</h1>
            <div className="inner">
              {box2contents.map((con, idx) => (
                <Box2 key={idx} icon={con.icon} title={con.title} con={con.con} />
              ))}
            </div>
          </S.Article>
          <S.Article className="box3">
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
          </S.Article>
          <S.Article className="box4">
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
          </S.Article>
        </S.Section>
      </S.Main>
    </>
  )
}

export default Home

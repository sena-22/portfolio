import {useNavigate} from 'react-router-dom'

import * as S from './style'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faBlog} from '@fortawesome/free-solid-svg-icons'
import moon from '../img/moon.png'

const Nav = () => {
  const navigate = useNavigate()

  const handleNavigate = nav => {
    navigate(nav)
  }

  const handleOpenLink = url => {
    window.location.href = url
  }

  const navList = [
    {
      name: '01. about',
      link: 'about'
    },
    {
      name: '02. project',
      link: 'project/0'
    },
    {
      name: '03. contact',
      link: 'contact'
    }
  ]

  return (
    <S.NavContainer>
      <S.Logo src={moon} onClick={() => handleNavigate('/')} />
      <S.NavList>
        {navList.map(nav => (
          <div onClick={() => navigate(`/${nav.link}`)}>{nav.name}</div>
        ))}
      </S.NavList>
      <S.Links>
        <span onClick={() => handleOpenLink('https://github.com/sena-22')}>
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span onClick={() => handleOpenLink('https://sena-22.github.io/')}>
          <FontAwesomeIcon icon={faBlog} />
        </span>
      </S.Links>
    </S.NavContainer>
  )
}

export default Nav

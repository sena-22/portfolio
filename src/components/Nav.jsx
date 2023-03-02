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

  return (
    <S.NavContainer>
      <S.Logo src={moon} onClick={() => handleNavigate('/')} />
      <S.NavList>
        <div onClick={() => handleNavigate('/')}>Home</div>
        <div onClick={() => handleNavigate('/about')}>About</div>
        <div onClick={() => handleNavigate('/project/0')}>Project</div>
        <div onClick={() => handleNavigate('/contact')}>Contact</div>
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

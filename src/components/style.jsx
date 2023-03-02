import styled from 'styled-components'

/* Nav */
export const NavContainer = styled.div`
  width: 200px;
  height: 100%;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  position: fixed;
`

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin: 50px 65px 100px;

  cursor: pointer;
`
export const NavList = styled.div`
  text-align: center;

  & div {
    color: #a6a6b2;
    font-size: 29px;
    font-weight: 600;
    padding: 10px 0;
    font-family: 'poor story';
    transition: all 0.5s;

    cursor: pointer;

    :hover {
      color: #bb88ed;
    }
  }
`

export const Links = styled.div`
  position: absolute;
  top: 90%;
  left: 15%;

  > span {
    font-size: 28px;
    transition: all 0.5s;
    margin-left: 30px;
    cursor: pointer;
    &:hover {
      font-size: 33px;
    }
  }
`

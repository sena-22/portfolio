import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import moon from "../img/moon.png";

const Container = styled.div`
  width: 200px;
  height: 100%;
  background-color: #292929;
  display: flex;
  flex-direction: column;
  position: fixed;
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  margin: 50px 65px 100px;
`;
const NavList = styled.div`
  text-align: center;

  & div {
    color: #a6a6b2;
    font-size: 25px;
    padding: 10px 0;
    font-family: "poor story";
    transition: all 0.5s;

    cursor: pointer;

    :hover {
      color: #9308fd;
    }
  }
`;

const Links = styled.div`
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
`;

const Nav = () => {
  const navigate = useNavigate();

  const handleNavigate = (nav) => {
    navigate(nav);
  };

  const handleOpenLink = (url) => {
    window.location.href = url;
  };
  return (
    <Container>
      <Logo src={moon} />
      <NavList>
        <div onClick={() => handleNavigate("/")}>Home</div>
        <div onClick={() => handleNavigate("/about")}>About</div>
        <div onClick={() => handleNavigate("/contact")}>Contact</div>
      </NavList>
      <Links>
        <span onClick={() => handleOpenLink("https://github.com/sena-22")}>
          <FontAwesomeIcon icon={faGithub} />
        </span>
        <span onClick={() => handleOpenLink("https://sena-22.github.io/")}>
          <FontAwesomeIcon icon={faBlog} />
        </span>
      </Links>
    </Container>
  );
};

export default Nav;

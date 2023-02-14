import styled from "styled-components";
import { useParams } from "react-router-dom";

import Nav from "../components/Nav";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Project = () => {
  const { id } = useParams();

  return (
    <Container>
      <Nav />
      <h1>123</h1>
    </Container>
  );
};

export default Project;

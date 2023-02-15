import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import Nav from "../components/Nav";

import { firstProjectData } from "../data/first_project_data";
import { secondProjectData } from "../data/second_project_data";

const ArticleContainer = styled.div`
  width: 50%;
  height: ${(props) => props.height || null};
  float: left;
  box-sizing: border-box;
  padding: 12px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 14px;
  cursor: pointer;
  filter: saturate(40%);

  :hover {
    filter: saturate(120%);
  }

  video {
    width: 100%;
    height: ${(props) => props.height || null};
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font: bold 20px/1 "IM_Hyemin-Bold";
    color: #444;
    margin-top: 15px;
    margin-bottom: 15px;
    text-align: center;
  }

  p {
    font: 13px "IM_Hyemin-Bold";
    color: #777;
    margin-bottom: 10px;
    text-align: center;
    padding: 0 20px;
  }
`;
const Article = (props) => {
  const { id } = useParams();
  return (
    <ArticleContainer height={id === Number(1) ? "75%" : "65%"}>
      <Inner height={id === Number(1) ? "70%" : "80%"}>
        <video
          src={props.video}
          muted
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
        />
        <h2>{props.title}</h2>
        <p>{props.con}</p>
      </Inner>
    </ArticleContainer>
  );
};

const Section = styled.section`
  width: 100%;
  margin-left: 200px;
`;

const ProjectList = () => {
  const { id } = useParams();
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    // if (id === 0) {
    //   setCurrentData(thirdProjectData);
    // } else
    console.log(typeof id);
    if (Number(id) === 1) {
      setCurrentData(secondProjectData);
    } else if (Number(id) === 2) {
      setCurrentData(firstProjectData);
    }
  }, [id]);

  return (
    <Section>
      {currentData?.map((data, idx) => (
        <Article
          key={idx}
          video={data.video}
          title={data.title}
          con={data.con}
        />
      ))}
    </Section>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Project = () => {
  return (
    <Container>
      <Nav />
      <ProjectList />
    </Container>
  );
};

export default Project;

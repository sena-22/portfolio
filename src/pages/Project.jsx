import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";

import Nav from "../components/Nav";
import Modal from "../components/Modal";

import { firstProjectData } from "../data/first_project_data";
import { secondProjectData } from "../data/second_project_data";
import { thirdProjectData } from "../data/third_project_data";
import {
  firstMetaData,
  secondMetaData,
  thirdMetaData,
} from "../data/meta_data";

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
  const projectId = Number(id);
  return (
    <ArticleContainer height={projectId === 1 ? "50%" : "65%"}>
      <Inner height={projectId === 1 ? "70%" : "80%"}>
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

const ProjectList = ({ currentData }) => {
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

  > button {
    border: none;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    z-index: 5;
    position: fixed;
    border-radius: 50%;
    background-color: transparent;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;

    :hover {
      background-color: #ba88eda4;
    }
  }
  > button:nth-of-type(1) {
    top: 80%;
    left: 3%;
  }

  > button:nth-of-type(2) {
    top: 80%;
    left: 7%;
  }
`;

const Project = () => {
  const { id } = useParams();
  const projectId = Number(id);
  const [currentData, setCurrentData] = useState([]);
  const [currentMetaData, setCurrentMetaData] = useState([]);

  useEffect(() => {
    if (projectId === 0) {
      setCurrentData(thirdProjectData);
      setCurrentMetaData(thirdMetaData);
    } else if (projectId === 1) {
      setCurrentData(secondProjectData);
      setCurrentMetaData(secondMetaData);
    } else if (projectId === 2) {
      setCurrentData(firstProjectData);
      setCurrentMetaData(firstMetaData);
    }
  }, [id]);

  const navigate = useNavigate();
  const [modal, openModal] = useState(false);

  const handleNavigate = (projectId) => {
    if (projectId < 0 || projectId > 2) {
      return;
    } else {
      navigate(`/project/${projectId}`);
    }
  };

  const handleModal = () => {
    openModal(!modal);
  };

  return (
    <Container>
      <Nav />
      <ProjectList currentData={currentData} />
      <button onClick={() => handleNavigate(projectId - 1)}>﹤</button>
      <button onClick={() => handleNavigate(projectId + 1)}>﹥</button>
      <button onClick={handleModal}>view detail</button>
      {modal && (
        <Modal currentMetaData={currentMetaData} handleModal={handleModal} />
      )}
    </Container>
  );
};

export default Project;

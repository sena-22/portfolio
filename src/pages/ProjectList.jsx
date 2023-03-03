import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import * as D from '../data'

const ProjectListContainer = styled.div`
  p,
  section {
    padding: 70px;
    box-sizing: border-box;
    width: 80%;
  }

  p {
    font: bold 24px 'Source Code Pro', monospace;
    color: #bb88ed;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: end;

    .left--section {
      width: 70%;
      height: 300px;
      background-color: #bb88ed;
      margin-right: 20px;
      cursor: pointer;
      > img {
        width: 100%;
        height: 100%;
      }
    }

    .right--section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font: 13px 'Source Code Pro', monospace;

      > div {
        margin: 10px 0;
      }

      > div:first-child {
        color: #bb88ed;
        font-size: 15px;
      }

      .title {
        font: bold 25px 'Source Code Pro', monospace;
        cursor: pointer;

        :hover {
          color: #bb88ed;
        }
      }

      .desc {
        padding: 25px 30px;
        margin-left: -100px;
        background-color: #605d64ec;
        border-radius: 7px;
        word-wrap: break-word;
      }

      .stacks {
        font-size: 14px;
        text-align: end;
      }

      .links {
        > span {
          cursor: pointer;
          margin-left: 20px;
          font-size: 17px;
          :hover {
            color: #bb88ed;
          }
        }
      }
    }
  }
`

const ProjectList = () => {
  const navigate = useNavigate()
  const projectList = [...D.firstMetaData, ...D.secondMetaData, ...D.thirdMetaData]

  const handleOpenLink = url => {
    window.location.href = url
  }

  const handleNavigate = projectId => {
    navigate(`./project/${projectId}`)
  }
  return (
    <ProjectListContainer id="project">
      <p>
        <span>02.</span>
        <span>project</span>
      </p>
      {projectList.map(project => (
        <section key={project.title}>
          <div
            className="left--section"
            onClick={() => handleNavigate(project.projectId)}>
            <img src={project.img} alt="project_img" />
          </div>
          <div className="right--section">
            <div>project</div>
            <div className="title" onClick={() => handleNavigate(project.projectId)}>
              {project.title}
            </div>
            <div className="desc">{project.mainFunction}</div>
            <div className="stacks">{project.stack}</div>
            <div className="links">
              <span onClick={() => handleOpenLink(project.repository)}>
                <FontAwesomeIcon icon={faGithub} />
              </span>
              {project.url && (
                <span onClick={() => handleOpenLink(project.url)}>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </span>
              )}
            </div>
          </div>
        </section>
      ))}
    </ProjectListContainer>
  )
}

export default ProjectList

import {useNavigate} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import * as D from '../data'
import * as S from './style'

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
    <S.ProjectListContainer id="project">
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
    </S.ProjectListContainer>
  )
}

export default ProjectList

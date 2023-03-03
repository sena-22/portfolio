import styled from 'styled-components'
import * as D from '../data'

const ProjectListContainer = styled.div`
  background-color: #292929;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-left: 200px;

  border-left: 0.5px solid rgba(255, 255, 255, 0.2);
  /* position: relative; */

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

    .right--section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font: 16px 'Source Code Pro', monospace;

      > div {
        margin: 10px 0;
      }

      .desc {
        padding: 25px 30px;
        /* width: 700px; */
        background-color: #555353;
        word-wrap: break-word;
      }
    }
  }
`

const ProjectList = () => {
  const projectList = [...D.firstMetaData, ...D.secondMetaData, ...D.thirdMetaData]

  const handleOpenLink = url => {
    window.location.href = url
  }
  return (
    <ProjectListContainer id="project">
      <p>
        <span>02.</span>
        <span>project</span>
      </p>
      {projectList.map(project => (
        <section key={project.title}>
          <div className="left--section">
            <video
              src={''}
              muted
              onMouseOver={e => e.target.play()}
              onMouseOut={e => e.target.pause()}
            />
            <div>이미지</div>
          </div>
          <div className="right--section">
            <div>project</div>
            <div className="title">{project.title}</div>
            <div className="desc">{project.mainFunction}</div>
            <div className="stack">{project.stack}</div>
            <div className="links">
              <span onClick={() => handleOpenLink(project.repository)}>Repo</span>
              {project.url && (
                <span onClick={() => handleOpenLink(project.url)}>URL</span>
              )}
            </div>
          </div>
        </section>
      ))}
    </ProjectListContainer>
  )
}

export default ProjectList

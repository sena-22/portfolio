import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import Nav from '../components/Nav'
import Modal from '../components/Modal'

import * as S from './style'
import * as D from '../data'

const Article = props => {
  const {id} = useParams()
  const projectId = Number(id)
  return (
    <S.ArticleContainer height={projectId === 1 ? '50%' : '65%'}>
      <S.Inner height={projectId === 1 ? '70%' : '80%'}>
        <video
          src={props.video}
          muted
          onMouseOver={e => e.target.play()}
          onMouseOut={e => e.target.pause()}
        />
        <h2>{props.title}</h2>
        <p>{props.con}</p>
      </S.Inner>
    </S.ArticleContainer>
  )
}

const ProjectList = ({currentData}) => {
  return (
    <S.ProjectSection>
      {currentData?.map((data, idx) => (
        <Article key={idx} video={data.video} title={data.title} con={data.con} />
      ))}
    </S.ProjectSection>
  )
}

const Project = () => {
  const {id} = useParams()
  const projectId = Number(id)
  const [currentData, setCurrentData] = useState([])
  const [currentMetaData, setCurrentMetaData] = useState([])

  useEffect(() => {
    if (projectId === 0) {
      setCurrentData(D.thirdProjectData)
      setCurrentMetaData(D.thirdMetaData)
    } else if (projectId === 1) {
      setCurrentData(D.secondProjectData)
      setCurrentMetaData(D.secondMetaData)
    } else if (projectId === 2) {
      setCurrentData(D.firstProjectData)
      setCurrentMetaData(D.firstMetaData)
    }
  }, [id])

  const navigate = useNavigate()
  const [modal, openModal] = useState(false)

  const handleNavigate = projectId => {
    if (projectId < 0 || projectId > 2) {
      return
    } else {
      navigate(`/project/${projectId}`)
    }
  }

  const handleModal = () => {
    openModal(!modal)
  }

  return (
    <S.ProjectContainer>
      <Nav />
      <ProjectList currentData={currentData} />
      <button onClick={() => handleNavigate(projectId - 1)}>﹤</button>
      <button onClick={() => handleNavigate(projectId + 1)}>﹥</button>
      <button onClick={handleModal}>view detail</button>
      {modal && <Modal currentMetaData={currentMetaData} handleModal={handleModal} />}
    </S.ProjectContainer>
  )
}

export default Project

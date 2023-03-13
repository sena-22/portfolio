import * as S from './style'

const Modal = ({handleModal, currentMetaData}) => {
  const {title, date, description, mainFunction, repository, url, stack} =
    currentMetaData[0]

  const handleOpenLink = url => {
    window.location.href = url
  }

  return (
    <S.ModalContainer onClick={handleModal}>
      <S.ModalWrapper onClick={e => e.stopPropagation()}>
        <div className="meta">
          <h1>{title}</h1>
          <p>{date}</p>
          <div>{description}</div>
        </div>
        <div className="con">
          <div className="con_left">
            <p>주요 기능</p>
            <p>Github</p>
            {url && <p>URL</p>}
            <p>Stack</p>
          </div>
          <div className="con_right">
            <p>{mainFunction}</p>
            <p onClick={() => handleOpenLink(repository)}>{repository}</p>
            {url && <p onClick={() => handleOpenLink(url)}>{url}</p>}
            <p>{stack}</p>
          </div>
        </div>
      </S.ModalWrapper>
    </S.ModalContainer>
  )
}
export default Modal

import {useState} from 'react'
import emailjs from '@emailjs/browser'
import * as S from './style'

const Input = ({label, type, name, value, onChange}) => {
  return (
    <>
      <label>{label}</label>
      <input
        typeof={type}
        name={name}
        value={value}
        required
        onChange={onChange}
        autoComplete="off"></input>
      <span></span>
    </>
  )
}

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const {name, email, subject, message} = inputs

  //이메일 유효성 검사
  const emailRegex =
    /^[0-9a-zA-Z_]{4,}([-_.]?[0-9a-zA-Z])*@[a-zA-Z]{3,}([-_.]?[a-zA-Z])*.[a-zA-Z]{2,}$/i

  const onChange = e => {
    const {name, value} = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onSubmit = () => {
    if (!emailRegex.test(email)) {
      alert('이메일 형식을 확인해주세요')
    } else if (message.length < 1) {
      alert('메시지를 입력해주세요')
    } else {
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
      }

      if (window.confirm('이메일을 전송하시겠습니까?')) {
        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_PUBLIC_KEY
          )
          .then(
            res => {
              console.log(res.text)
            },
            err => {
              console.log(err.text)
            }
          )
          .then(() => {
            onReset()
          })
      }
    }
  }

  const onReset = () => {
    setInputs({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <S.ContactContainer>
      <S.ContactMain>
        <h1>Contact me</h1>
        <div className="input">
          <Input label="Name" type="text" name="name" value={name} onChange={onChange} />
          <Input
            label="Email"
            type="text"
            name="email"
            value={email}
            onChange={onChange}
          />
          <Input
            label="Subject"
            type="text"
            name="subject"
            value={subject}
            onChange={onChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            value={message}
            onChange={onChange}
            autoComplete="off"></textarea>
          <span></span>
          <button onClick={onSubmit}>Send message</button>
        </div>
      </S.ContactMain>
    </S.ContactContainer>
  )
}

export default Contact

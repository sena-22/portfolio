import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reset from 'styled-reset'
import {createGlobalStyle} from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`${reset}`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
)

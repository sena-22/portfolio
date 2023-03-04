import styled from 'styled-components'

import * as P from './index'
import Nav from '../components/Nav'

const Layout = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-left: 200px;
`

const Home = () => {
  return (
    <div id="home">
      <Nav />
      <Layout>
        <P.About />
        <P.ProjectList />
        <P.Contact />
      </Layout>
    </div>
  )
}

export default Home

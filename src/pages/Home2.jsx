import * as P from './index'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <>
      <Nav />
      <P.About />
      <P.ProjectList />
      <P.Contact />
    </>
  )
}

export default Home

import * as P from './index'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div id="home">
      <Nav />
      <P.About />
      <P.ProjectList />
      <P.Contact />
    </div>
  )
}

export default Home

import {createBrowserRouter} from 'react-router-dom'

import Home from '../pages/Home'
import Project from '../pages/Project'
import About from '../pages/About'
import Contact from '../pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/project/:id',
    element: <Project />
  }
])

export default router

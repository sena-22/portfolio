import {createBrowserRouter} from 'react-router-dom'

import Home from '../pages/Home'
import Project from '../pages/Project'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/project/:id',
    element: <Project />
  }
])

export default router

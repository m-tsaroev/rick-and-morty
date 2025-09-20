import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { mainRoutes } from '@/config/routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: mainRoutes,
  },
])

export { router }

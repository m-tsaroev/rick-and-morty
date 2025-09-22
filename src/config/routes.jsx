import { redirect } from 'react-router-dom'
import { PATHS } from './paths'
import { Characters } from '@/pages/Characters'
import { Character } from '@/pages/Character'
import { Locations } from '@/pages/Locations'
import { Location } from '@/pages/Location'
import { Episodes } from '@/pages/Episodes'
import { Episode } from '@/pages/Episode'

const mainRoutes = [
  {
    path: PATHS.HOME,
    loader: () => redirect(PATHS.CHARACTERS),
  },
  {
    path: PATHS.CHARACTERS,
    element: <Characters />,
  },
  {
    path: PATHS.CHARACTER_ID,
    element: <Character />,
  },
  {
    path: PATHS.LOCATIONS,
    element: <Locations />,
  },
  {
    path: PATHS.LOCATION_ID,
    element: <Location />,
  },
  {
    path: PATHS.EPISODES,
    element: <Episodes />,
  },
  {
    path: PATHS.EPISODE_ID,
    element: <Episode />,
  },
]

export { mainRoutes }

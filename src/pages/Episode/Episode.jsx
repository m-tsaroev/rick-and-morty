import { EposideSection } from '@/sections/Eposide'
import { useParams } from 'react-router-dom'

const Episode = () => {
  const { id } = useParams()

  return <EposideSection id={id} />
}

export { Episode }

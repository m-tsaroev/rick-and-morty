import { DetailsSection } from '../Details'
import './LocationSection.scss'

const LocationSection = (props) => {
  const { id } = props

  const titleId = 'location-page'

  return <DetailsSection id={id} titleId={titleId} className='location' />
}

export { LocationSection }

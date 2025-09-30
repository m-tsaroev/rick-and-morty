import { useGetLocationsByIdQuery } from '@/services/mainApiSlice/mainApiSlice'
import { DetailsSection } from '../Details'
import './LocationSection.scss'

const LocationSection = (props) => {
  const { id } = props

  const titleId = 'location-page'

  const { data, isLoading } = useGetLocationsByIdQuery(id)

  return (
    <DetailsSection
      titleId={titleId}
      className='location'
      data={data}
      isLoading={isLoading}
    />
  )
}

export { LocationSection }

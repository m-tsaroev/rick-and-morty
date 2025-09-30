import { useGetEpisodesByIdQuery } from '@/services/mainApiSlice/mainApiSlice'
import { DetailsSection } from '../Details'
import './EposideSection.scss'

const EposideSection = (props) => {
  const { id } = props

  const titleId = 'episode-page'

  const { data, isLoading } = useGetEpisodesByIdQuery(id)

  return (
    <DetailsSection
      titleId={titleId}
      className='episode'
      data={data}
      isLoading={isLoading}
    />
  )
}

export { EposideSection }

import { useGetEpisodesQuery } from '@/services/mainApiSlice/mainApiSlice'
import './EpisodesSection.scss'
import { Section } from '@/components/ui/Section'
import logo from '@/assets/images/episodes-logo.png'
import { Card } from '@/components/ui/Card'

const EpisodesSection = () => {
  const titleId = 'episodes-page'

  const {data, isLoading} = useGetEpisodesQuery()

  return (
    <Section
      titleId={titleId}
      className='locations'
      logo={logo}
      data={data}
      searchPlaceholder='Filter by name...'
      isLoading={isLoading}
      SectionCardComponent={Card}
      sectionCardComponentModes={{
        isLocationsPage: false,
      }}
      initialShowedCardsCount={11}
    />
  )
}

export { EpisodesSection }

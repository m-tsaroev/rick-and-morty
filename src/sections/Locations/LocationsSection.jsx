import { Section } from '@/components/ui/Section'
import './LocationsSection.scss'
import logo from '@/assets/images/locations-logo.png'
import { useGetLocationsQuery } from '@/services/mainApiSlice/mainApiSlice'
import { Card } from '@/components/ui/Card'

const LocationsSection = () => {
  const titleId = 'locations-page'

  const { data, isLoading } = useGetLocationsQuery()

  console.log(data)

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
        isLocationsPage: true,
      }}
      initialShowedCardsCount={11}
    />
  )
}

export { LocationsSection }

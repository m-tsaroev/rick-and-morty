import './CharactersSection.scss'
import logo from '@/assets/images/logo.png'
import { useGetCharactersQuery } from '@/services/mainApiSlice/mainApiSlice'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { CharacterCard } from '@/components/ui/CharacterCard'
import { Section } from '@/components/ui/Section'

const CharactersSection = () => {
  const titleId = 'characters-page'

  const { data, isLoading } = useGetCharactersQuery(1)

  const [characters, setCharacters] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showedCardsCount, setShowedCardsCount] = useState(11)

  const debouncedSearchValue = useDebounce(searchValue)

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const onLoadButtonClick = () => {
    setShowedCardsCount((prevShowedCardsCount) => prevShowedCardsCount + 8)
  }

  useEffect(() => {
    setCharacters(
      data?.results?.filter(({ name }, index) => {
        return (
          index <= showedCardsCount &&
          name
            .trim()
            .toLowerCase()
            .includes(debouncedSearchValue.trim().toLowerCase())
        )
      })
    )
  }, [data, debouncedSearchValue, showedCardsCount])

  return (
    <Section
      titleId={titleId}
      className='characters'
      logo={logo}
      data={data}
      searchPlaceholder='Filter by name...'
      isLoading={isLoading}
      SectionCardComponent={CharacterCard}
      initialShowedCardsCount={11}
    />
  )
}

export { CharactersSection }

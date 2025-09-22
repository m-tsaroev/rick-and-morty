import { Search } from '@/components/ui/Search'
import './CharactersSection.scss'
import logo from '@/assets/images/logo.png'
import { useGetCharactersQuery } from '@/services/mainApiSlice/mainApiSlice'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { CharacterCard } from '@/components/ui/CharacterCard'
import { Spinner } from '@/components/ui/Spinner'
import { LoadButton } from '@/components/ui/LoadButton'

const CharactersSection = () => {
  const titleId = 'characters-page'

  const { data, isLoading } = useGetCharactersQuery(2)

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
    <section
      className='characters-section characters'
      aria-labelledby={titleId}
    >
      <h1 id={titleId} className='visually-hidden'>
        {titleId}
      </h1>
      <div className='characters__inner container'>
        <div className='characters__logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='characters__body'>
          <header className='characters__header'>
            <Search
              placeholder='Search...'
              value={searchValue}
              onChange={onSearchChange}
              className='characters__search'
            />
          </header>
          <div className='characters__cards'>
            <ul className='characters__list'>
              {isLoading ? (
                <Spinner />
              ) : (
                characters?.map((char) => (
                  <CharacterCard
                    {...char}
                    key={char.id}
                    className='characters__cards-item'
                  />
                ))
              )}
            </ul>
            {showedCardsCount < 19 && (
              <LoadButton className='characters__load-button' onClick={onLoadButtonClick} />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { CharactersSection }

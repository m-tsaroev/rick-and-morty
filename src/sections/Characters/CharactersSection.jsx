import { Search } from '@/components/ui/Search'
import './CharactersSection.scss'
import logo from '@/assets/images/logo.png'
import { useGetCharactersQuery } from '@/services/mainApiSlice/mainApiSlice'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { CharacterCard } from '@/components/ui/CharacterCard'

const CharactersSection = () => {
  const titleId = 'characters-page'

  const { data, isLoading } = useGetCharactersQuery()

  const [characters, setCharacters] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearchValue = useDebounce(searchValue)

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    setCharacters(
      data?.results?.filter(({ name }) => {
        return name
          .trim()
          .toLowerCase()
          .includes(debouncedSearchValue.trim().toLowerCase())
      })
    )
  }, [data, debouncedSearchValue])

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
            />
          </header>
          <ul className='characters__list'>
            {characters?.map((char) => (
              <CharacterCard {...char} key={char.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { CharactersSection }

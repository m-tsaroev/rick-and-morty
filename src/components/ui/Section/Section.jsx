import classNames from 'classnames'
import './Section.scss'
import { Search } from '../Search'
import { Spinner } from '../Spinner'
import { LoadButton } from '../LoadButton'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

const Section = (props) => {
  const {
    titleId,
    className,
    logo,
    data,
    searchPlaceholder,
    isLoading,
    SectionCardComponent,

    // sectionCardComponentModes = {} | object

    sectionCardComponentModes,
    initialShowedCardsCount,
  } = props

  const [sectionsCardList, setSectionsCardList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showedCardsCount, setShowedCardsCount] = useState(
    initialShowedCardsCount
  )

  const debouncedSearchValue = useDebounce(searchValue)

  const onSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const onLoadButtonClick = () => {
    setShowedCardsCount((prevShowedCardsCount) => prevShowedCardsCount + 8)
  }

  useEffect(() => {
    setSectionsCardList(
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
      className={classNames('section', className, `${className}-section`)}
      aria-labelledby={titleId}
    >
      <h1 id={titleId} className='visually-hidden'>
        {titleId}
      </h1>
      <div className='section__inner container'>
        <div className='section__logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='section__body'>
          <header className='section__header'>
            <Search
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={onSearchChange}
              className='section__search'
            />
          </header>
          <div className='section__cards'>
            <ul className='section__cards-list'>
              {isLoading ? (
                <Spinner />
              ) : (
                sectionsCardList?.map((card) => (
                  <li className='section__cards-item' key={card.id}>
                    <SectionCardComponent
                      {...sectionCardComponentModes}
                      {...card}
                    />
                  </li>
                ))
              )}
            </ul>
            {showedCardsCount < 19 && (
              <LoadButton
                className='characters__load-button'
                onClick={onLoadButtonClick}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Section }

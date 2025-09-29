import classNames from 'classnames'
import './Section.scss'
import { Search } from '../Search'
import { Spinner } from '../Spinner'
import { LoadButton } from '../LoadButton'

const Section = (props) => {
  const {
    titleId,
    className,
    logo,

    // searchSetting = {
    //   searchPlaceholder: string,
    //   searchValue: string,
    //   searchChangeFunction: function()
    // }

    searchSettings,
    isLoading,
    sectionCardsList,
    SectionCardComponent,
    showedCardsCount,
    onLoadButtonClick,
  } = props

  const { searchPlaceholder, searchValue, searchChangeFunction } =
    searchSettings

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
              onChange={searchChangeFunction}
              className='section__search'
            />
          </header>
          <div className='section__cards'>
            <ul className='section__cards-list'>
              {isLoading ? (
                <Spinner />
              ) : (
                sectionCardsList?.map((card) => (
                  <li className='section__cards-item' key={card.id}>
                    <SectionCardComponent {...card} />
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

import classNames from 'classnames'
import './DetailsSection.scss'
import { GoBackButton } from '@/components/ui/GoBackButton'
import { useGetCharacterByIdQuery } from '@/services/mainApiSlice/mainApiSlice'
import { Spinner } from '@/components/ui/Spinner'
import { CharacterCard } from '@/components/ui/CharacterCard'
import { useEffect, useState } from 'react'

const DetailsSection = (props) => {
  const { className, titleId, data, isLoading } = props

  const [charactersList, setCharactersList] = useState([])
  const [isResidents, setIsResidents] = useState(true)

  const { data: characters, isLoading: isCharactersLoading } =
    useGetCharacterByIdQuery(
      data?.residents
        ? data?.residents.map((resident) => {
            return parseInt(resident.match(/\d+/g))
          })
        : data?.characters
        ? data?.characters.map((character) => {
            return parseInt(character.match(/\d+/g))
          })
        : []
    )

  useEffect(() => {
    if (data?.characters) {
      setIsResidents(false)
    }

    setCharactersList(
      Array.isArray(characters)
        ? characters
        : characters?.id
        ? [characters]
        : []
    )
  }, [characters, data])

  return (
    <section
      className={classNames(
        `details-section
        ${className}-section details`,
        className
      )}
      aria-labelledby={titleId}
    >
      <div className='details__inner container'>
        <GoBackButton />

        {isLoading ? (
          <Spinner />
        ) : (
          <div className='details__head'>
            <h1 className='details__name' id={titleId}>
              {data?.name}
            </h1>
            <div className='details__head-info'>
              {data?.type && (
                <div className='details__head-info__group'>
                  <div className='details__head-info__group-name'>Type</div>
                  <div className='details__head-info__group-value'>
                    {data.type}
                  </div>
                </div>
              )}
              {data?.dimension && (
                <div className='details__head-info__group'>
                  <div className='details__head-info__group-name'>
                    Dimension
                  </div>
                  <div className='details__head-info__group-value'>
                    {data.dimension}
                  </div>
                </div>
              )}
              {data?.episode && (
                <div className='details__head-info__group'>
                  <div className='details__head-info__group-name'>Episode</div>
                  <div className='details__head-info__group-value'>
                    {data.episode}
                  </div>
                </div>
              )}
              {data?.air_date && (
                <div className='details__head-info__group'>
                  <div className='details__head-info__group-name'>Date</div>
                  <div className='details__head-info__group-value'>
                    {data.air_date}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className='details__body'>
          <div className='details__cards'>
            {charactersList && (
              <>
                <h2 className='details__cards-title h3'>
                  {isResidents ? 'Residents' : 'Cast'}
                </h2>
                <ul className='details__cards-list'>
                  {isCharactersLoading ? (
                    <Spinner />
                  ) : charactersList.length > 0 ? (
                    charactersList?.map((resident) => (
                      <li className='details__cards-item' key={resident.id}>
                        <CharacterCard {...resident} />
                      </li>
                    ))
                  ) : (
                    <p>No residents</p>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { DetailsSection }

import classNames from 'classnames'
import './DetailsSection.scss'
import { GoBackButton } from '@/components/ui/GoBackButton'
import {
  useGetCharacterByIdQuery,
  useGetLocationsByIdQuery,
} from '@/services/mainApiSlice/mainApiSlice'
import { Spinner } from '@/components/ui/Spinner'
import { CharacterCard } from '@/components/ui/CharacterCard'
import { useEffect, useState } from 'react'

const DetailsSection = (props) => {
  const { id, className, titleId } = props

  const [residentsList, setResidentsList] = useState([])

  const { data, isLoading } = useGetLocationsByIdQuery(id)
  const { data: residents, isLoading: isResidentsLoading } =
    useGetCharacterByIdQuery(
      data?.residents.map((resident) => {
        return parseInt(resident.match(/\d+/g))
      }) || []
    )

  useEffect(() => {
    setResidentsList(
      Array.isArray(residents) ? residents : residents?.id ? [residents] : []
    )
  }, [residents])

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
            </div>
          </div>
        )}

        <div className='details__body'>
          <div className='details__cards'>
            {residents && (
              <>
                <h2 className='details__cards-title h3'>Residents</h2>
                <ul className='details__cards-list'>
                  {isResidentsLoading ? (
                    <Spinner />
                  ) : residentsList.length > 0 ? (
                    residentsList?.map((resident) => (
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

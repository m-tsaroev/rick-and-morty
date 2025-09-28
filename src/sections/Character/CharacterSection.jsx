import { Link, useParams } from 'react-router-dom'
import './CharacterSection.scss'
import {
  useGetCharacterByIdQuery,
  useGetEpisodesByIdQuery,
} from '@/services/mainApiSlice/mainApiSlice'
import { PATHS } from '@/config/paths'
import noImage from '@/assets/images/no-image.jpg'
import { InformationRow } from '@/components/ui/InformationRow'
import { useEffect, useState } from 'react'

const CharacterSection = () => {
  const titleId = 'character-page'

  const { id } = useParams()

  const [episodes, setEpisodes] = useState([])

  const { data } = useGetCharacterByIdQuery(id)
  const { data: episodesData } = useGetEpisodesByIdQuery(
    data?.episode.map((episode, index) => {
      return index < 4 ? parseInt(episode.match(/\d+/g)) : null
    })
  )

  useEffect(() => {
    setEpisodes(() =>
      Array.isArray(episodesData)
        ? episodesData
        : episodesData?.id
        ? [episodesData]
        : []
    )
  }, [episodesData])

  const characterLocationNumber = data?.location.url.match(/\d+/g)
  const characterOriginNumber = data?.origin.url.match(/\d+/g)

  return (
    <section className='character-section character' aria-labelledby={titleId}>
      <div className='character__inner container'>
        <div className='character__head'>
          <div className='character__avatar'>
            <img src={data?.image ? data.image : noImage} alt='' width={300} />
          </div>
          <h1 className='character__name' id={titleId}>
            {data?.name}
          </h1>
        </div>
        <div className='character__body'>
          <div className='character__informations character__column'>
            <h2 className='h3 character__informations-title character__column-title'>
              Informations
            </h2>
            <ul className='character__informations-list'>
              <li className='character__informations-item'>
                <InformationRow
                  name='Gender'
                  value={data?.gender}
                  className='character__informations-group'
                />
              </li>
              <li className='character__informations-item'>
                <InformationRow
                  name='Status'
                  value={data?.status}
                  className='character__informations-group'
                />
              </li>
              <li className='character__informations-item'>
                <InformationRow
                  name='Specie'
                  value={data?.species}
                  className='character__informations-group'
                />
              </li>
              <li className='character__informations-item'>
                <InformationRow
                  name='Origin'
                  value={data?.origin.name}
                  linkTo={
                    characterOriginNumber
                      ? `${PATHS.LOCATIONS}/${characterOriginNumber}`
                      : ''
                  }
                  className='character__informations-group'
                />
              </li>
              <li className='character__informations-item'>
                <InformationRow
                  name='Type'
                  value={data?.type ? data.type : 'unknow'}
                  className='character__informations-group'
                />
              </li>
              <li className='character__informations-item'>
                <InformationRow
                  name='Location'
                  value={data?.location.name}
                  linkTo={`${PATHS.LOCATIONS}/${characterLocationNumber}`}
                  className='character__informations-group'
                />
              </li>
            </ul>
          </div>
          <div className='character__episodes character__column'>
            <h2 className='h3 character__episodes-title character__column-title'>
              Episodes
            </h2>
            <ul className='character__episodes-list'>
              {episodes?.map(({ id, episode, name, air_date }) => (
                <li key={id} className='character__episodes-item'>
                  <InformationRow
                    linkTo={`${PATHS.EPISODES}/${id}`}
                    name={episode}
                    value={name}
                    date={air_date}
                    mode='high'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CharacterSection }

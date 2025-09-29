import './Card.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { PATHS } from '@/config/paths'

const Card = (props) => {
  const { id, name, type, air_date: date, episode, className, isLocationsPage } = props

  return (
    <Link
      to={`${isLocationsPage ? PATHS.LOCATIONS : PATHS.EPISODES}/${id}`}
      id={id}
      className={classNames('card', className)}
    >
      <div className='card__info'>
        <h2 className='card__name h3'>{name}</h2>
        {type && <div className='card__type'>{type}</div>}
        {date && <div className='card__date'>{date}</div>}
        {episode && <div className='card__episode'>{episode}</div>}
      </div>
    </Link>
  )
}

export { Card }

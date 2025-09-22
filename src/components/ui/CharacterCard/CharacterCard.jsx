import classNames from 'classnames'
import './CharacterCard.scss'
import { Link } from 'react-router-dom'
import { PATHS } from '@/config/paths'

const CharacterCard = (props) => {
  const { id, name, species, image, className, width } = props

  return (
    <Link
      to={`${PATHS.CHARACTERS}/${id}`}
      id={id}
      className={classNames('character-card', className)}

      style={{
        width: `${width}px`
      }}
    >
      <div className='character-card__image'>
        <img src={image} alt={name} width={240} height={224} />
      </div>
      <div className='character-card__info'>
        <h2 className='character-card__name h3'>{name}</h2>
        <div className='character-card__specias'>{species}</div>
      </div>
    </Link>
  )
}

export { CharacterCard }

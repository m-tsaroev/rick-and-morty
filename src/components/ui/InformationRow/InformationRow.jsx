import { Link } from 'react-router-dom'
import './InformationRow.scss'
import classNames from 'classnames'

const InformationRow = (props) => {
  const {
    name,
    value,
    date,
    linkTo,
    className,

    // '' (default) | high

    mode,
  } = props

  return (
    <>
      {linkTo ? (
        <Link
          to={linkTo}
          className={classNames(
            'information-row information-row--link',
            className,
            {
              [`information-row--${mode}`]: mode
            }
          )}
          target='_blank'
        >
          <h3 className='information-row__name h4'>{name}</h3>
          <div className='information-row__value'>{value}</div>
          {date && <div className='information-row__date'>{date}</div>}
        </Link>
      ) : (
        <div className={classNames('information-row', className)}>
          <h3 className='information-row__name h4'>{name}</h3>
          <div className='information-row__value'>{value}</div>
          {date && <div className='information-row__date'>{date}</div>}
        </div>
      )}
    </>
  )
}

export { InformationRow }

import classNames from 'classnames'
import './LoadButton.scss'

const LoadButton = (props) => {
  const { onClick, className } = props

  return (
    <button className={classNames('load-button', className)} onClick={onClick}>
      load more
    </button>
  )
}

export { LoadButton }

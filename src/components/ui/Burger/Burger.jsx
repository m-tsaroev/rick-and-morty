import classNames from 'classnames'
import './Burger.scss'

const Burger = (props) => {
  const {
    // square (default) | triangle

    mode = 'square',
    isActive,
  } = props

  return (
    <div
      className={classNames('burger', {
        [`burger--${mode}`]: mode,
        'is-active': isActive,
      })}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export { Burger }

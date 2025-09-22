import classNames from 'classnames'
import './Search.scss'

const Search = (props) => {
  const { placeholder, value, onChange, className } = props

  return (
    <label htmlFor='search' className={classNames('search', className)}>
      <div className='search__icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          fill='none'
          {...props}
        >
          <path
            fill='#000'
            fillOpacity={0.54}
            d='M15.5 15h-.79l-.28-.27A6.471 6.471 0 0 0 16 10.5 6.5 6.5 0 1 0 9.5 17c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 20l-4.99-5Zm-6 0C7.01 15 5 12.99 5 10.5S7.01 6 9.5 6 14 8.01 14 10.5 11.99 15 9.5 15Z'
          />
        </svg>
      </div>
      <input
        id='search'
        type='search'
        className={classNames('search__field', className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export { Search }

import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '@/assets/images/logo-black.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__inner container'>
        <div className='header__logo'>
          <Link to='/'>
            <img src={logo} alt='Logo' />
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }

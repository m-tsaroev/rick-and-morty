import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import logo from '@/assets/images/logo-black.svg'
import { PATHS } from '@/config/paths'
import { Burger } from '@/components/ui/Burger'
import { useState } from 'react'
import classNames from 'classnames'

const Header = () => {
  const navLinks = [
    {
      to: PATHS.CHARACTERS,
      label: 'Characters',
    },
    {
      to: PATHS.LOCATIONS,
      label: 'Locations',
    },
    {
      to: PATHS.EPISODES,
      label: 'Episodes',
    },
  ]

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const isNavMenuToggle = () => setIsNavMenuOpen(!isNavMenuOpen)

  return (
    <>
      <header className='header'>
        <div className='header__inner container'>
          <div className='header__logo'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <nav className='header__menu'>
            <ul className='header__menu-list'>
              {navLinks.map(({ to, label }, index) => (
                <li className='header__menu-item' key={index}>
                  <NavLink to={to} className='header__menu-link'>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className='header__burger-button visible-mobile'
            onClick={isNavMenuToggle}
          >
            <Burger isActive={isNavMenuOpen} />
          </button>
        </div>
      </header>
      <nav
        className={classNames('header__menu--mobile visible-mobile', {
          'is-open': isNavMenuOpen,
        })}
      >
        <ul className='header__menu--mobile-list'>
          {navLinks.map(({ to, label }, index) => (
            <li
              className='header__menu-item'
              key={index}
              onClick={isNavMenuToggle}
            >
              <NavLink to={to} className='header__menu-link'>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export { Header }

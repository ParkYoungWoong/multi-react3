import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/signin', label: 'Sign In', onlyGuest: true }
]

export default function Header() {
  const [accessToken, setAccessToken] = useState<string | null>(null)

  const location = useLocation()

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'))
  }, [location])

  return (
    <header className="flex gap-[10px]">
      {navigations.map(nav => (
        <NavLink
          key={nav.to}
          to={nav.to}
          style={{ display: nav.onlyGuest && accessToken ? 'none' : 'block' }}
          className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
          {nav.label}
        </NavLink>
      ))}
    </header>
  )
}

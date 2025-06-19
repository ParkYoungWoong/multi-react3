import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'
import { useUserStore } from '@/stores/user'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/signin', label: 'Sign In', onlyGuest: true }
]

export default function Header() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const user = useUserStore(state => state.user)
  const setUser = useUserStore(state => state.setUser)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'))
  }, [location])

  function signOut() {
    localStorage.removeItem('accessToken')
    setUser(null)
    navigate('/')
  }

  return (
    <header className="flex justify-between">
      <menu className="flex gap-[10px]">
        {navigations.map(nav => (
          <NavLink
            key={nav.to}
            to={nav.to}
            style={{ display: nav.onlyGuest && accessToken ? 'none' : 'block' }}
            className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
            {nav.label}
          </NavLink>
        ))}
      </menu>
      {user && (
        <div>
          <span>{user.email}</span>
          <button onClick={signOut}>로그아웃</button>
        </div>
      )}
    </header>
  )
}

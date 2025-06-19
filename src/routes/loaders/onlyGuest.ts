import { redirect } from 'react-router'

export function onlyGuest() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return redirect('/')
  }
  return true
}

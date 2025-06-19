import { redirect } from 'react-router'

export async function requiresAuth({ request }: { request: Request }) {
  console.log(request)
  const accessToken = localStorage.getItem('accessToken')
  // 토큰 서버로 요청/응답
  if (!accessToken) {
    return redirect('/signin')
  }
  return true
}

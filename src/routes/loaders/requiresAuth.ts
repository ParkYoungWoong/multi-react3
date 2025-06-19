import { redirect } from 'react-router'

export async function requiresAuth({ request }: { request: Request }) {
  console.log(request)
  const accessToken = localStorage.getItem('accessToken')
  // 토큰 서버로 요청/응답
  if (!accessToken) {
    // return redirect('/signin')
    const url = new URL(request.url) // 요청 페이지의 URL 정보를 가져옵니다.
    const redirectTo = url.pathname + url.search // 요청 페이지의 경로 + 쿼리스트링
    return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
  }
  return true
}

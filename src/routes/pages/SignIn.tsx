import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { delay } from '@/utils'
import { useNavigate, useSearchParams } from 'react-router'
import { useUserStore } from '@/stores/user'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const setUser = useUserStore(state => state.setUser)
  const [searchParams] = useSearchParams()
  const query = Object.fromEntries(searchParams)
  console.log(query.redirectTo)

  async function signIn() {
    if (isLoading) return
    setIsLoading(true)
    // 로그인 API 요청
    await delay(1500)
    if (email && password) {
      const accessToken = 'abcd1234'
      localStorage.setItem('accessToken', accessToken)
      setUser({ email })
      // http://localhost:5173/signin?redirectTo=%2Fmovies
      navigate(query.redirectTo || '/')
    }
    setIsLoading(false)
  }

  return (
    <div className="flex max-w-[400px] flex-col gap-[10px]">
      <TextField
        type="text"
        placeholder="이메일을 입력해주세요."
        label="이메일"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        placeholder="비밀번호를 입력해주세요."
        label="비밀번호"
        value={password}
        onChange={e => setPassword(e.target.value)}
        hint="비밀번호는 8자 이상 작성해야 합니다."
      />
      <Button
        color="primary"
        loading={isLoading}
        onClick={signIn}>
        로그인
      </Button>
      <h2>{email}</h2>
    </div>
  )
}

// ...................................

// const user = {
//   name: 'Neo',
//   age: 22,
//   isValid: true,
//   emails: ['neo@gmail.com', 'neo@naver.com'],
//   city: 'Suwon'
//   // rest: ''
// }
// // const name = user.name
// const { name, age, ...abc } = user
// console.log(name, age) // 'Neo'
// console.log(abc) // { isValid: true, emails: ['neo@gmail.com', 'neo@naver.com'], city: 'Suwon' }

// const numbers = [8, 3, 11, 500, 29, 7]
// const [, , a, ...rest] = numbers

// console.log(a) // 11
// console.log(rest) // [500, 29, 7]

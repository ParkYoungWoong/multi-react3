import { useState } from 'react'
import TextField from '@/components/TextField'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <>
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
      <h2>{email}</h2>
    </>
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

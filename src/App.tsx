import { useUserStore } from '@/stores/user'

export default function App() {
  const user = useUserStore(state => state.user)
  const setName = useUserStore(state => state.setName)
  const setFirstEmail = useUserStore(state => state.setFirstEmail)

  return (
    <>
      <h2 onClick={() => setName('Lewis')}>{user.name}</h2>
      <h3 onClick={() => setFirstEmail('abc@heropy.dev')}>
        {user.address.emails[0]}
      </h3>
    </>
  )
}

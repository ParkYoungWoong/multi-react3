import { useCountStore } from '@/stores/count'

export default function Child() {
  const count = useCountStore(state => state.count)
  const increase = useCountStore(state => state.increase)

  return <h1 onClick={() => increase()}>{count}</h1>
}

import Header from '@/components/Header'
import { useOutlet } from 'react-router'

export default function Default() {
  const outlet = useOutlet()
  return (
    <>
      <Header />
      {outlet}
    </>
  )
}

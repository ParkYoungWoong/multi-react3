import Child from '@/components/Child'

export default function Parent({
  msg,
  onMsg
}: {
  msg: string
  onMsg: (msg: string) => void
}) {
  return (
    <>
      <h2
        onClick={() => {
          onMsg('React!')
        }}>
        {msg}
      </h2>
      <Child />
    </>
  )
}

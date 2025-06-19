export default function Modal({
  children,
  onClose
}: {
  children: React.ReactNode
  onClose?: () => void
}) {
  return (
    <div className="modal fixed top-0 left-0 flex h-[100vh] w-[100vw] items-center justify-center">
      <div
        className="overlay absolute top-0 left-0 h-full w-full cursor-pointer bg-black/70"
        onClick={onClose}></div>
      <div className="content relative max-h-[90%] w-[max-content] max-w-[1000px] min-w-[300px] overflow-y-auto rounded-[10px] bg-white p-[20px] shadow-xl">
        {children}
      </div>
    </div>
  )
}

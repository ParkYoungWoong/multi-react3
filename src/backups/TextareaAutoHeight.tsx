import { useState, useRef } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }

  return (
    <>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        style={{ overflow: 'hidden', resize: 'none' }}
      />
    </>
  )
}

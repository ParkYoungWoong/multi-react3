import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useTodoStore } from '@/stores/todo'
import { useState } from 'react'

export default function TodoCreator() {
  const createTodo = useTodoStore(state => state.createTodo)
  const [title, setTitle] = useState('')

  return (
    <div className="grid grid-cols-[1fr_120px] items-end gap-2">
      <TextField
        label="할 일 추가"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') {
            createTodo(title)
          }
        }}
      />
      <Button
        color="primary"
        onClick={() => createTodo(title)}>
        추가
      </Button>
    </div>
  )
}

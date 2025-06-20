import type { Todo } from '@/stores/todo'
import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useTodoStore } from '@/stores/todo'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const [isLoading, setIsLoading] = useState(false)
  const updateTodo = useTodoStore(state => state.updateTodo)

  function onEditMode() {
    setIsEditing(true)
  }
  function offEditMode(title: string = todo.title) {
    setIsEditing(false)
    setTitle(title)
  }
  async function onSave() {
    if (isLoading) return
    if (!title.trim()) return
    if (title === todo.title) return
    setIsLoading(true)
    await updateTodo({
      ...todo,
      title
    })
    setIsLoading(false)
    offEditMode(title)
  }

  return (
    <li className="mt-2">
      {isEditing ? (
        <div className="grid grid-cols-[1fr_50px_50px_50px] items-end gap-2">
          <TextField
            label="할 일 수정"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Escape') {
                offEditMode()
              }
            }}
          />
          <Button onClick={() => offEditMode()}>취소</Button>
          <Button
            color="primary"
            loading={isLoading}
            onClick={onSave}>
            저장
          </Button>
          <Button color="danger">삭제</Button>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr_50px] items-end gap-2">
          <h3>{todo.title}</h3>
          <Button
            color="primary"
            onClick={onEditMode}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}

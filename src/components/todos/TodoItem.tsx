import type { Todo } from '@/stores/todo'
import { useState, useRef, useEffect } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useTodoStore } from '@/stores/todo'
import { delay } from '@/utils'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const [isLoadingForUpdate, setIsLoadingForUpdate] = useState(false)
  const [isLoadingForDelete, setIsLoadingForDelete] = useState(false)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  function onEditMode() {
    setIsEditing(true)
  }
  function offEditMode(title: string = todo.title) {
    setIsEditing(false)
    setTitle(title)
  }
  async function onSave() {
    if (isLoadingForUpdate) return
    if (!title.trim()) return
    if (title === todo.title) return
    setIsLoadingForUpdate(true)
    await updateTodo({
      ...todo,
      title
    })
    setIsLoadingForUpdate(false)
    offEditMode(title)
  }
  async function onDelete() {
    if (isLoadingForDelete) return
    setIsLoadingForDelete(true)
    await delay(1500)
    await deleteTodo(todo)
    setIsLoadingForDelete(false)
  }

  return (
    <li className="mt-2">
      {isEditing ? (
        <div className="grid grid-cols-[1fr_50px_50px_50px] items-end gap-2">
          <TextField
            ref={inputRef}
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
            loading={isLoadingForUpdate}
            onClick={onSave}>
            저장
          </Button>
          <Button
            color="danger"
            loading={isLoadingForDelete}
            onClick={onDelete}>
            삭제
          </Button>
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

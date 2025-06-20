import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/todos/TodoItem'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </>
  )
}

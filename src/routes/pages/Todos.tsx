import TodoCreator from '@/components/todos/TodoCreator'
import TodoList from '@/components/todos/TodoList'

export default function Todos() {
  return (
    <div className="mx-auto max-w-[500px]">
      <TodoCreator />
      <TodoList />
    </div>
  )
}

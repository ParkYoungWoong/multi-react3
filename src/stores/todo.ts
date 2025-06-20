import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import axios from 'axios'

type Todos = Todo[] // 할 일 목록
interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

const request = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: 'KDT8_bcAWVpD8',
    username: 'KDT8_ParkYoungWoong'
  }
})

export const useTodoStore = create(
  immer(
    combine(
      {
        todos: [] as Todos
      },
      (set, get) => ({
        fetchTodos: async () => {
          const { data: todos } = await request.get('/')
          set({ todos })
        },
        createTodo: async (title: string) => {
          // request.post('주소', 데이터, 옵션)
          const { data: todo } = await request.post('/', {
            title
          })
          const { todos } = get()
          set({
            todos: [todo, ...todos]
          })
        },
        updateTodo: async (todo: Todo) => {
          await request.put(`/${todo.id}`, {
            title: todo.title,
            done: todo.done
          })
          set(state => {
            const index = state.todos.findIndex(t => t.id === todo.id)
            if (index !== -1) {
              state.todos[index] = todo
            }
          })
        }
      })
    )
  )
)

// const { data } = axios.메소드('주소', 옵션)

// const res = await fetch('주소', 옵션)
// const data = await res.json()

// const user = {
//   name: 'Neo',
//   age: 22
// }

// // const { name: n } = user
// const n = user.name
// console.log(n) // 'Neo'

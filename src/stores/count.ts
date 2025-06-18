// Store(데이터가 저장되는 장소, 저장소)
import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useCountStore = create(
  combine(
    {
      count: 7
    },
    (set, get) => {
      return {
        setCount: (newCount: number) => {
          set({ count: newCount })
        },
        increase: () => {
          // count += 1
          const { count } = get()
          set({
            count: count + 1
          })
        }
      }
    }
  )
)

// Store(데이터가 저장되는 장소, 저장소)
import { create } from 'zustand'
import { combine, persist, subscribeWithSelector } from 'zustand/middleware'

export const useCountStore = create(
  subscribeWithSelector(
    persist(
      combine(
        {
          count: 7,
          double: 14
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
      ),
      {
        name: 'Count Store',
        version: 1
      }
    )
  )
)

useCountStore.subscribe(
  state => state.count,
  count => {
    useCountStore.setState({
      double: count * 2
    })
  }
)

import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  immer(
    combine(
      {
        user: {
          name: 'Neo',
          age: 22,
          address: {
            city: 'Seoul',
            emails: ['neo@gmail.com', 'neo@naver.com']
          }
        }
      },
      set => ({
        setUser: async () => {
          const res = await fetch('https://api.heropy.dev/v1/user')
          const user = await res.json()
          set({
            user
          })
        },
        setName: (newName: string) => {
          set(state => {
            state.user.name = newName
          })
        },
        setFirstEmail: (newEmail: string) => {
          set(state => {
            state.user.address.emails[0] = newEmail
          })
        }
      })
    )
  )
)

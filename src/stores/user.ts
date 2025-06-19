import { create } from 'zustand'
import { combine } from 'zustand/middleware'

type User = {
  email: string
} | null

export const useUserStore = create(
  combine(
    {
      user: null as User
    },
    set => ({
      setUser(user: User) {
        set({ user })
      }
    })
  )
)

import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      movies: [] as Movies,
      isLoading: false,
      isLoadingForMovieDetails: true,
      currentMovie: null as MovieDetails | null
    },
    (set, get) => ({
      setSearchText(searchText: string) {
        set({ searchText })
      },
      async fetchMovies() {
        const { searchText, isLoading } = get()
        if (isLoading) return
        if (searchText.trim().length < 3) return
        try {
          set({ isLoading: true })
          const res = await fetch(
            `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
          )
          const { Search = [] } = await res.json()
          set({ movies: Search })
        } catch (error) {
          if (error instanceof Error) {
            alert(error.message)
          } else {
            console.error(error)
          }
        } finally {
          set({ isLoading: false })
        }
      },
      async fetchMovieDetails(movieId?: string) {
        if (!movieId) return
        const res = await fetch(
          `https://omdbapi.com/?apikey=7035c60c&i=${movieId}`
        )
        const movie = await res.json()
        set({
          isLoadingForMovieDetails: false,
          currentMovie: movie
        })
      }
    })
  )
)

// https://heropy.dev/images/batman.jpg?w=1000

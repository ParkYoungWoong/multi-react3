import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'
import { delay } from '@/utils'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Movies>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    await delay(4000)
    const res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=avengers')
    const { Search } = await res.json()
    console.log(Search)
    setMovies(Search)
    setIsLoading(false)
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(movie => {
            return <li key={movie.imdbID}>{movie.Title}</li>
          })}
        </ul>
      )}
    </>
  )
}

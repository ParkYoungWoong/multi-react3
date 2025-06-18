import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useState } from 'react'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function Movies() {
  const [searchText, setSearchText] = useState('')
  const [movies, setMovies] = useState<Movies>([])

  async function fetchMovies() {
    const res = await fetch(
      `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
    )
    const { Search } = await res.json()
    setMovies(Search)
  }

  return (
    <>
      <div className="grid grid-cols-[1fr_120px] items-end gap-2">
        <TextField
          label="검색"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              fetchMovies()
            }
          }}
        />
        <Button
          color="primary"
          onClick={fetchMovies}>
          검색
        </Button>
      </div>
      <div>
        {movies.map(movie => (
          <div key={movie.imdbID}>{movie.Title}</div>
        ))}
      </div>
    </>
  )
}

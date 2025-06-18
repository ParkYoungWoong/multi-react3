import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useState } from 'react'

export default function Movies() {
  const [searchText, setSearchText] = useState('')

  async function fetchMovies() {}

  return (
    <>
      <div>
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
        <Button onClick={fetchMovies}>검색</Button>
      </div>
    </>
  )
}

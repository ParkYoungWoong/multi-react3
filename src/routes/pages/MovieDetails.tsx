import { useEffect } from 'react'
import { useMovieStore } from '@/stores/movie'
import { useParams, useNavigate } from 'react-router'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'

export default function MovieDetails() {
  const movie = useMovieStore(state => state.currentMovie)
  const isLoading = useMovieStore(state => state.isLoadingForMovieDetails)
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)
  const { movieId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchMovieDetails(movieId)
    // eslint-disable-next-line
  }, [])

  return (
    <Modal onClose={() => navigate('/movies')}>
      {isLoading ? (
        <Loader color="royalblue" />
      ) : (
        movie && (
          <div className="mx-auto flex max-w-[1100px] gap-[70px]">
            <div className="w-[350px] shrink-0">
              <img
                src={movie.Poster.replace('SX300', 'SX1000')}
                alt={movie.Title}
                width={350}
              />
            </div>
            <div className="grow-1">
              <h1 className="text-[50px] font-bold">{movie.Title}</h1>
              <p>{movie.Plot}</p>
              <Info
                title="Ratings"
                value={movie.Ratings.map(rating => (
                  <p key={rating.Source}>
                    {rating.Source} - {rating.Value}
                  </p>
                ))}
              />
              <Info
                title="Actors"
                value={movie.Actors}
              />
              <Info
                title="Director"
                value={movie.Director}
              />
              <Info
                title="Genre"
                value={movie.Genre}
              />
            </div>
          </div>
        )
      )}
    </Modal>
  )
}

function Info({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <div className="mt-[20px]">
      <h3 className="text-[20px] font-bold">{title}</h3>
      <p>{value}</p>
    </div>
  )
}

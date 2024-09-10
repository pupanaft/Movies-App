import { format } from 'date-fns'

const getStaticResource = async (pagination) => {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${pagination}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjA5OWM2MjQyZTBmOWNmY2E2NjFhMzA1MTMyNjlmNSIsIm5iZiI6MTcyNDQ0MDAzOS4yNTI5NjMsInN1YiI6IjY2YzhkOTUyNTk2NmQ1Mzk1Zjg3NmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gO7GNvaLh3Lw3SfzSGYfX-r3M-hWazuNozc-zg4ucQg',
    },
  })
  if (!res.ok) {
    throw new Error(`An error occurred while getting the list of movies ${res.status}`)
  }
  const body = await res.json()

  const totalPage = body.total_results
  const movieInfo = body.results.map((item) => ({
    title: item.title,
    genreIds: item.genre_ids,
    posterPath: item.poster_path,
    overview: item.overview,
    voteAverage: item.vote_average,
    releaseDate: item.release_date ? format(item.release_date, 'PP') : 'No date',
    key: item.id,
    rate: 0,
  }))
  return { movieInfo, totalPage }
}
export default getStaticResource

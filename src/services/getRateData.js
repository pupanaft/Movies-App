import { format } from 'date-fns'

const getRateData = async (gId, page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${gId}/rated/movies?language=en-US&page=${page}&sort_by=created_at.asc`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjA5OWM2MjQyZTBmOWNmY2E2NjFhMzA1MTMyNjlmNSIsIm5iZiI6MTcyNDQ0MDAzOS4yNTI5NjMsInN1YiI6IjY2YzhkOTUyNTk2NmQ1Mzk1Zjg3NmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gO7GNvaLh3Lw3SfzSGYfX-r3M-hWazuNozc-zg4ucQg',
      },
    }
  ).catch((err) => {
    if (err.message === 'Failed to fetch') {
      throw new Error('Connection Error')
    }
  })
  if (!res.ok) {
    return { movieInfo: [], totalPage: 0 }
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
    rate: item.rating,
  }))
  return { movieInfo, totalPage }
}
export default getRateData

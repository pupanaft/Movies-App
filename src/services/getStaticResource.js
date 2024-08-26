const getStaticResource = async () => {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjA5OWM2MjQyZTBmOWNmY2E2NjFhMzA1MTMyNjlmNSIsIm5iZiI6MTcyNDQ0MDAzOS4yNTI5NjMsInN1YiI6IjY2YzhkOTUyNTk2NmQ1Mzk1Zjg3NmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gO7GNvaLh3Lw3SfzSGYfX-r3M-hWazuNozc-zg4ucQg',
    },
  })
  if (!res.ok) {
    throw new Error(`что то не то лооол ${res.status}`)
  }
  const body = await res.json()
  const movieInfo = body.results.map((item) => ({
    title: item.title,
    genreIds: item.genre_ids,
    posterPath: item.poster_path,
    overview: item.overview,
    voteAverage: item.vote_average,
    releaseDate: item.release_date,
    id: item.id,
    rate:0
  }))
  return movieInfo
}
export default getStaticResource

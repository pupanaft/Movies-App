const getGenres = async () => {
  const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjA5OWM2MjQyZTBmOWNmY2E2NjFhMzA1MTMyNjlmNSIsIm5iZiI6MTcyNDQ0MDAzOS4yNTI5NjMsInN1YiI6IjY2YzhkOTUyNTk2NmQ1Mzk1Zjg3NmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gO7GNvaLh3Lw3SfzSGYfX-r3M-hWazuNozc-zg4ucQg',
      accept: 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error(`An error occurred while searching: ${res.status}`)
  }
  const body = await res.json()
  const genres = body.genres.reduce((acc, item) => {
    acc[item.id] = item.name
    return acc
  }, {})
  return genres
}
export default getGenres

const createNewGuest = async () => {
  const res = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjA5OWM2MjQyZTBmOWNmY2E2NjFhMzA1MTMyNjlmNSIsIm5iZiI6MTcyNDQ0MDAzOS4yNTI5NjMsInN1YiI6IjY2YzhkOTUyNTk2NmQ1Mzk1Zjg3NmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gO7GNvaLh3Lw3SfzSGYfX-r3M-hWazuNozc-zg4ucQg',
    },
  }).catch((err) => {
    if (err.message === 'Failed to fetch') {
      throw new Error('There is no internet connection')
    }
  })
  const body = await res.json()
  const guestSessionId = body.guest_session_id

  return guestSessionId
}
export default createNewGuest

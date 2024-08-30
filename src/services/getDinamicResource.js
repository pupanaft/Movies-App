const getDinamicResource = async (serchMovie, page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${serchMovie}&api_key=ff099c6242e0f9cfca661a30513269f5&page=${page}`,
    {}
  )
  if (!res.ok) {
    throw new Error(`что то не то лооол ${res.status}`)
  }
  const body = await res.json()
  const totalPage = body.total_pages
  const movieInfo = body.results.map((item) => ({
    title: item.title,
    genreIds: item.genre_ids,
    posterPath: item.poster_path,
    overview: item.overview,
    voteAverage: item.vote_average,
    releaseDate: item.release_date,
    key: item.id,
    rate: 0,
  }))
  return { movieInfo, totalPage }
}
export default getDinamicResource

import { Flex } from 'antd'
import { Content } from 'antd/es/layout/layout'

import MovieItem from '../movie-item'

export default function MovieContent({ guestSessionId, rateChange, movieData }) {
  const pup = movieData.map((item) => <MovieItem guestSessionId={guestSessionId} rateChange={rateChange} key={item.key} data={item} />)
  return (
    <Content key={Math.random()}>
      <Flex wrap justify="space-around" gap={36}>
        {pup}
      </Flex>
    </Content>
  )
}

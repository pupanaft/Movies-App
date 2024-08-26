import { Flex } from 'antd'
import { Content } from 'antd/es/layout/layout'

import MovieItem from '../movie-item'

export default function MovieContent({ rate, movieData }) {
  const pup = movieData.map((item) => <MovieItem rate={rate} data={item} />)
  return (
    <Content>
      <Flex wrap justify="space-around" gap={36}>
        {pup}
      </Flex>
    </Content>
  )
}

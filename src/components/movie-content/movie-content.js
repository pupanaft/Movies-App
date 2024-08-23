import { Flex } from 'antd'
import { Content } from 'antd/es/layout/layout'

import MovieItem from '../movie-item'

export default function MovieContent(){
  return(
    <Content style={{ height: '100vh' }}>
      <Flex justify='space-evenly'>
        <MovieItem/>
        <MovieItem/>
      </Flex>
    </Content>
  )
}
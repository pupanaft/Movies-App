import  { Flex, Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout'

import HeaderMovie from '../header-movie/header-movie'
import MovieContent from '../movie-content'

export default function pup() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Flex justify="center">
        <Layout style={{ 'max-width': '1110px', backgroundColor: 'white', height: '100vh' }}>
          <Flex vertical style={{ height: '100%' }}>
            <HeaderMovie />
            <MovieContent/>
            <Footer style={{ 'margin-top': 'auto' }} />
          </Flex>
        </Layout>
      </Flex>
    </Layout>
  )
}

import { Flex, Spin } from 'antd'
import { Content } from 'antd/es/layout/layout'

import FooterMovie from '../footer-movie'
import MovieItem from '../movie-item'
import HeaderMovie from '../header-movie/header-movie'

export default function Main({
  search,
  serchMovie='',
  setSerchMovie =()=>{},
  movieData,
  rateChange,
  setPagination,
  pagination,
  totalPage,
  guestSessionId
}) {

  const pup = movieData.map((item) => <MovieItem guestSessionId={guestSessionId} rateChange={rateChange} key={item.key} data={item} />)
  return (
    <Flex vertical style={{ height: '100%' }}>
      {search && <HeaderMovie serchMovie={serchMovie} setSerchMovie={setSerchMovie} />}
      {movieData.length <= 0 ? (
        <Flex justify="center" align="center" style={{ height: '100%' }}>
          <Spin size="large" />
        </Flex>
      ) : (
        <>
          <Content>
            <Flex wrap justify="space-around" gap={36}>
              {pup}
            </Flex>
          </Content>
          <FooterMovie totalPage={totalPage} setPagination={setPagination} pagination={pagination} />
        </>
      )}
    </Flex>
  )
}

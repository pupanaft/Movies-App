import { Flex, Spin } from 'antd'

import MovieContent from '../movie-content'
import FooterMovie from '../footer-movie'

export default function RateContent({
  movieData,
  rateChange,
  setPagination,
  pagination,
  totalPage,
  guestSessionId
}) {


  return (
    <div className='pivopit'>
      <Flex vertical style={{ height: '100%' }}>
        {movieData.length <= 0 ? (
          <Flex justify="center" align="center" style={{ height: '100%' }}>
            <Spin size="large" />
          </Flex>
        ) : (
          <>
            <MovieContent guestSessionId={guestSessionId} rateChange={rateChange} movieData={movieData} />
            <FooterMovie totalPage={totalPage} setPagination={setPagination} pagination={pagination} />
          </>
        )}
      </Flex>
    </div>
  )
}

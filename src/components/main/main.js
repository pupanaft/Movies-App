import { Flex, Spin } from 'antd'
import { Content } from 'antd/es/layout/layout'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

import { GenresConsumer } from '../../services/genresContext'
import MainItem from '../main-item'
import FooterMovie from '../footer-movie'
import HeaderMovie from '../header-movie/header-movie'

import './main.css'

export default function Main({
  rateChange,
  guestSessionId,
  search,
  setSerchMovie = () => {},
  movieData,
  setPagination,
  pagination,
  totalPage,
}) {
  let resultDinamicArr
  if (movieData.length > 0) {
    resultDinamicArr = movieData.map((item) => (
      <GenresConsumer key={item.key}>
        {(value) => (
          <MainItem genres={value} guestSessionId={guestSessionId} rateChange={rateChange} key={item.key} data={item} />
        )}
      </GenresConsumer>
    ))
  } else {
    resultDinamicArr = movieData
  }

  const screens = useBreakpoint()
  return (
    <Flex vertical style={{ height: '100%' }}>
      {search && <HeaderMovie setSerchMovie={setSerchMovie} />}
      {movieData.length <= 0 ? (
        <Flex justify="center" align="center" style={{ height: '100vh' }}>
          <Spin size="large" />
        </Flex>
      ) : (
        <>
          <Content className="main__content">
            <Flex wrap justify="space-around" gap={screens.xs ? 8 : 36}>
              {resultDinamicArr}
            </Flex>
          </Content>
          <FooterMovie
            empty={movieData.key === 'empty'}
            totalPage={totalPage}
            setPagination={setPagination}
            pagination={pagination}
          />
        </>
      )}
    </Flex>
  )
}

import { ConfigProvider, Flex, Image, Rate, Space, Typography } from 'antd'
import Layout from 'antd/es/layout/layout'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

import './main-item.css'
import { StarsName } from '../../utils/constants'

import qImage from './fallback.png'

const { Title, Text, Paragraph } = Typography

export default function MainItem({ genres, guestSessionId, rateChange, data }) {
  const tag = data.genreIds.map((tagid) => (
    <Text code key={tagid}>
      {genres[tagid]}
    </Text>
  ))
  const screens = useBreakpoint()
  let rateRound = ''
  if (data.voteAverage.toFixed(1) < 3) {
    rateRound = '--red'
  } else if (data.voteAverage.toFixed(1) < 5) {
    rateRound = '--yellow'
  } else if (data.voteAverage.toFixed(1) < 7) {
    rateRound = '--bright_yellow'
  } else {
    rateRound = '--green'
  }
  let titleCount = 3
  if (data.title.length <= 19 && data.title.length >= 14) {
    titleCount = 4
  } else if (data.title.length >= 19) {
    titleCount = 5
  }
  return (
    <ConfigProvider
      key={data.key}
      theme={{
        components: {
          Typography: {
            fontSizeHeading3: 22,
            titleMarginBottom: 0,
            fonfontSizeHeading4: 18,
          },
          Layout: {
            bodyBg: '#ffffff',
          },
        },
      }}
    >
      <Layout key={data.id} className="main__item item">
        {!screens.xs ? (
          <div className="item__image">
            <Image
              width={183}
              height={281}
              src={`https://image.tmdb.org/t/p/w185/${data.posterPath}`}
              fallback={qImage}
            />
          </div>
        ) : null}
        <Layout className="item__wrapper">
          <div className="item__body">
            {screens.xs ? (
              <Image
                width={60}
                height={91}
                src={`https://image.tmdb.org/t/p/w185/${data.posterPath}`}
                fallback={qImage}
              />
            ) : null}
            <div className="item__information">
              <Space direction="vertical">
                <Title level={titleCount} style={{ margin: '0', width: '186px' }}>
                  {data.title}
                </Title>
                <Text type="secondary">{data.releaseDate}</Text>
                <Flex wrap>{tag}</Flex>
              </Space>
            </div>
          </div>
          <div className="item__footter">
            <Paragraph className="item__text" ellipsis={{ rows: 5 }}>
              {data.overview}
            </Paragraph>
            <Rate
              tooltips={StarsName}
              allowHalf
              className="item__stars"
              count={10}
              style={{ fontSize: '15px' }}
              onChange={(e) => {
                rateChange(e, data.key, guestSessionId)
              }}
              value={data.rate}
            />
          </div>
          <div className="round">
            <span className={`round__text ${rateRound}`}>{data.voteAverage.toFixed(1)}</span>
          </div>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

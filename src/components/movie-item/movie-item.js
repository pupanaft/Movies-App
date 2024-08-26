import { ConfigProvider, Flex, Image, Rate, Space, Typography } from 'antd'
import Layout from 'antd/es/layout/layout'

import './movie-item.css'
import {Genre, StarsName }from '../../utils/constants'


const { Title, Text, Paragraph } = Typography

export default function MovieItem({ key, rateChange, data }) {
  const tag = []
  data.genreIds.map((tagid) =>
    tag.push(
      <Text code key={tagid}>
        {Genre[tagid]}
      </Text>
    )
  )
  let rateRound = ''
  if ( data.voteAverage.toFixed(1)<3){
    rateRound = '--red'
  }
  else if(data.voteAverage.toFixed(1)<5){
    rateRound = '--yellow'
  }
  else if(data.voteAverage.toFixed(1)<7){
    rateRound = '--bright_yellow'
  }
  else{
    rateRound ='--green'
  }
  let titleCount = 3
  if (data.title.length <= 19 && data.title.length >= 14){
    titleCount = 4
  }
  else if(data.title.length >= 19){
    titleCount = 5
  }

  return (
    <ConfigProvider  key={key}
      theme={{
        components: {
          Typography: {
            fontSizeHeading3: 22,
            titleMarginBottom: 0,
            fonfontSizeHeading4:18
            
          },
          Layout: {
            bodyBg: '#ffffff',
          },
        },
      }}
    >
      <Layout
        key={data.id}
        style={{
          'max-width': '451px',
          height: '281px',
          backgroundColor: '#ffffff',
          'box-shadow': '0px 4px 12px 0px rgba(0, 0, 0, 0.15)',
        }}
      >
        <Space align="start" style={{ 'column-gap': 0 }}>
          <Image width={183} height={281} src={`https://image.tmdb.org/t/p/w185/${data.posterPath}`} />
          <Layout style={{ padding: '10px 20px' }}>
            <Space direction="vertical" style={{position:'relative'}}>
              <Title level={titleCount} style={{ margin: '0', width: '186px'}}>
                {data.title}
              </Title>
              <Text type="secondary">{data.releaseDate}</Text>
              <Flex wrap>{tag}</Flex>
              <Paragraph style={{ fontSize: '13px', 'margin-bottom':0,}} ellipsis={{ rows: 5 }}>
                {data.overview}
              </Paragraph>
              <Rate tooltips={StarsName} allowHalf count={10} style={{fontSize:'15px'} } onChange={(e) => rateChange(e, data.key)} value={data.rate}/>
              <div className='round'><span className={`round__text ${rateRound}`}>{data.voteAverage.toFixed(1)}</span></div>
            </Space>
          </Layout>
        </Space>
      </Layout>
    </ConfigProvider>
  )
}

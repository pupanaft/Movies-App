
import { ConfigProvider, Flex, Image , Typography } from 'antd'
import Layout from 'antd/es/layout/layout'

const { Title, Text, Paragraph } = Typography

export default function MovieItem(){
  return(
    <ConfigProvider theme={{
      components: {
        Typography:{
          fontSizeHeading4:22,
        },
      },
    }}>
      <Layout style={{'max-width':'451px', height:'279px', backgroundColor:'#ffffff'}}>
        <Flex >
          <Image width={183} height={281} src=""/>
          <Layout style={{padding:'10px 20px'}}>
            <Flex vertical>
              <Title level={4} style={{margin:'0'}}>The way back</Title>
              <Text type="secondary">March 5, 2020 </Text>
              <Flex>
                <Text code>Action</Text>
                <Text code>Drama</Text>
              </Flex>
              <Paragraph style={{fontSize:'13px'}} ellipsis={{rows:6}}>A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul  and salvation by becoming the coach of a disparate ethnically mixed high ...</Paragraph>
            </Flex>
          </Layout>
        </Flex >
      </Layout>
    </ConfigProvider>
  )
}
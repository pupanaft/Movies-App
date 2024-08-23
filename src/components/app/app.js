import { Flex, Layout } from 'antd'
import { Footer, Header, Content } from 'antd/es/layout/layout'

export default function pup() {
  return (
    <Layout style={{ height: '100vh' }}>
      <Flex justify="center">
        <Layout style={{ 'max-width': '1110px', backgroundColor: 'white', height: '100vh' }}>
          <Flex vertical style={{ height: '100%' }}>
            <Header />
            <Content style={{ height: '277px' }}>
              <div>ppppp</div>
              <div>ppppp</div>
              <div>ppppp</div>
              <div>ppppp</div>
            </Content>
            <Footer style={{ 'margin-top': 'auto' }} />
          </Flex>
        </Layout>
      </Flex>
    </Layout>
  )
}


import { ConfigProvider, Pagination } from 'antd'
import { Footer } from 'antd/es/layout/layout'

export default function FooterMovie() {
  return (
    <ConfigProvider theme={{
      components: {
        Layout: {
          footerBg:'ffffff'
        },
      },
    }}>
      <Footer style={{ 'margin-top': 'auto' }} > 
        <Pagination align='center'defaultCurrent={1} defaultPageSize={20} total={50}/>
      </Footer>
     
    </ConfigProvider>
  )
}

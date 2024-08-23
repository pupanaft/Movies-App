import { Header } from 'antd/es/layout/layout'
import { ConfigProvider } from 'antd'

export default function HeaderMovie() {
  return(
    <ConfigProvider theme={{
      components: {
        Layout:{
          headerBg:'#ffffff'
        },
      },
    }}>
      <Header />
    </ConfigProvider>
  )
}
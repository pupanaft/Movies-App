import { Header } from 'antd/es/layout/layout'
import { ConfigProvider } from 'antd'

import HeaderSearch from '../header-search/header-search'

export default function HeaderMovie({ serchMovie, setSerchMovie }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#ffffff',
            headerPadding: '0 0',
          },
        },
      }}
    >
      <Header>
        <HeaderSearch serchMovie={serchMovie} setSerchMovie={setSerchMovie} />
      </Header>
    </ConfigProvider>
  )
}

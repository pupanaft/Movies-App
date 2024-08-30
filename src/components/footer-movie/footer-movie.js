import { ConfigProvider, Pagination } from 'antd'
import { Footer } from 'antd/es/layout/layout'

export default function FooterMovie({ totalPage, setPagination, pagination }) {
  let total
  if (totalPage >= 500) {
    total = 500
  } else {
    total = totalPage
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            footerBg: 'ffffff',
          },
        },
      }}
    >
      <Footer style={{ 'margin-top': 'auto' }}>
        <Pagination
          align="center"
          onChange={(e) => setPagination(e)}
          showSizeChanger={false}
          defaultCurrent={pagination}
          defaultPageSize={20}
          total={total * 20}
        />
      </Footer>
    </ConfigProvider>
  )
}

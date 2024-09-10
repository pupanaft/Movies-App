import { ConfigProvider, Pagination } from 'antd'
import { Footer } from 'antd/es/layout/layout'

export default function FooterMovie({ empty, totalPage, setPagination, pagination }) {
  let total
  if (totalPage >= 10000) {
    total = 10000
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
      <Footer style={{ marginTop: 'auto' }}>
        {!empty ? (
          <Pagination
            align="center"
            onChange={(e) => setPagination(e)}
            showSizeChanger={false}
            defaultCurrent={pagination}
            defaultPageSize={20}
            total={total}
          />
        ) : null}
      </Footer>
    </ConfigProvider>
  )
}

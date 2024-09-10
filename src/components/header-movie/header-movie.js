import { Header } from 'antd/es/layout/layout'
import { ConfigProvider, Input } from 'antd'
import { useRef } from 'react'
import { debounce } from 'lodash'
import './header-movie.css'

export default function HeaderMovie({ serchMovie, setSerchMovie }) {
  const intervalRef = useRef('')

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#ffffff',
          },
        },
      }}
    >
      <Header className="header">
        <Input
          ref={intervalRef}
          onChange={debounce(() => {
            setSerchMovie(intervalRef.current.input.value)
          }, 600)}
          placeholder="Type to search..."
          defaultValue={serchMovie}
        />
      </Header>
    </ConfigProvider>
  )
}

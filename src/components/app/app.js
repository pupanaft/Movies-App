import { Alert, ConfigProvider, Empty, Flex, Layout, Tabs } from 'antd'
import { useEffect, useState } from 'react'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'

import getDinamicResource from '../../services/getDinamicResource'
import getStaticResource from '../../services/getStaticResource'
import './app.css'
// import SearchContent from '../search-content'
import createNewGuest from '../../services/createNewGuest'
// import RateContent from '../rate-content/rate-content'
import getRateData from '../../services/getRateData'
import Main from '../main'
import getGenres from '../../services/getGenres'
import { GenresProvider } from '../../services/genresContext'

export default function App() {
  const [movieData, setMovieData] = useState([])
  const [serchMovie, setSerchMovie] = useState('')
  const [pagination, setPagination] = useState(1)
  const [totalPage, setTotalPage] = useState(null)
  const [activeTabs, setActiveTabs] = useState('1')
  const [guestSessionId, setGuestSessionId] = useState('')
  const [rateData, setRateData] = useState([])
  const [genres, setGenres] = useState([])

  const screens = useBreakpoint()

  const rateChange = (e, key, gId) => {
    fetch(`https://api.themoviedb.org/3/movie/${key}/rating?guest_session_id=${gId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjA5OWM2MjQyZTBmOWNmY2E2NjFhMzA1MTMyNjlmNSIsIm5iZiI6MTcyNDQ0MDAzOS4yNTI5NjMsInN1YiI6IjY2YzhkOTUyNTk2NmQ1Mzk1Zjg3NmFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gO7GNvaLh3Lw3SfzSGYfX-r3M-hWazuNozc-zg4ucQg',
      },
      body: JSON.stringify({ value: e }),
    })
    setMovieData((prevMovieData) => {
      const idx = prevMovieData.findIndex((el) => el.key === key)
      const newItem = { ...prevMovieData[idx], rate: e }
      return [...prevMovieData.slice(0, idx), newItem, ...prevMovieData.slice(idx + 1)]
    })
  }

  useEffect(() => {
    if (genres.length <= 0) {
      getGenres().then((res) => {
        setGenres(res)
      })
    }
    if (guestSessionId.length <= 0) {
      createNewGuest()
        .then((res) => {
          setGuestSessionId(res)
        })
        .catch((err) => {
          if (err.message === 'There is no internet connection') {
            setMovieData(
              <div className="wrapper wrapper--height">
                <Alert
                  message={`${err.message}`}
                  description="Error Description Error Description Error Description Error Description"
                  type="error"
                />
              </div>
            )
          }
        })
    }
    if (activeTabs === '1') {
      if (serchMovie.length <= 0) {
        getStaticResource(pagination).then((result) => {
          setMovieData(result.movieInfo)
          setTotalPage(result.totalPage)
        })
      } else if (serchMovie.length > 0) {
        getDinamicResource(serchMovie, pagination)
          .then((result) => {
            if (result.movieInfo.length > 0) {
              setMovieData(result.movieInfo)
              setTotalPage(result.totalPage)
            } else {
              setMovieData(<Empty key="empty" />)
            }
          })
          .catch((error) => {
            throw new Error(`Error fetching data: ${error.message}`)
          })
      }
    }

    if (activeTabs === '2') {
      getRateData(guestSessionId, pagination).then((res) => {
        if (res.movieInfo.length > 0) {
          setRateData(res.movieInfo)
          setTotalPage(res.totalPage)
        } else {
          setRateData(<Empty key="empty" />)
        }
      })
    }
  }, [serchMovie, pagination, guestSessionId, activeTabs, genres])
  return (
    <GenresProvider value={genres}>
      <Layout>
        <Flex justify="center">
          <Layout className={`wrapper ${movieData.length <= 0 && 'wrapper--height'}`}>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    horizontalMargin: screens.xs ? '0' : '0 0 16px 0',
                  },
                },
              }}
            >
              <Tabs
                size="large"
                centered
                destroyInactiveTabPane
                type="line"
                defaultActiveKey={activeTabs}
                items={[
                  {
                    label: 'Search',
                    key: '1',
                    children: (
                      <Main
                        search
                        rateChange={rateChange}
                        guestSessionId={guestSessionId}
                        setSerchMovie={setSerchMovie}
                        movieData={movieData}
                        totalPage={totalPage}
                        setPagination={setPagination}
                        pagination={pagination}
                      />
                    ),
                  },
                  {
                    label: 'Rated',
                    key: '2',
                    children: (
                      <Main
                        rateChange={rateChange}
                        guestSessionId={guestSessionId}
                        movieData={rateData}
                        setPagination={setPagination}
                        pagination={pagination}
                        totalPage={totalPage}
                      />
                    ),
                  },
                ]}
                onChange={(e) => {
                  setActiveTabs(e)
                  setPagination(1)
                }}
              />
            </ConfigProvider>
          </Layout>
        </Flex>
      </Layout>
    </GenresProvider>
  )
}

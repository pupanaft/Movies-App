import { Flex, Layout } from 'antd'
import { useEffect, useState } from 'react'

import getDinamicResource from '../../services/getDinamicResource'
import getStaticResource from '../../services/getStaticResource'
import HeaderMovie from '../header-movie/header-movie'
import MovieContent from '../movie-content'
import FooterMovie from '../footer-movie'

export default function App () {

  const [movieData, setMovieData ] = useState([])
  const [serchMovie, setSerchMovie] = useState('')
  // const [pagination, setPagination] = useState(1)
  useEffect(()=>{
    if(serchMovie.length<=0){
      getStaticResource()
        .then((result) => {
          setMovieData( result )
        })
        .catch((error) => {
          throw new Error('Error fetching data:', error.status)
        })
    }
    else if(serchMovie.length>0){
      getDinamicResource(serchMovie,1)
        .then((result) => {
          setMovieData( result )
        })
        .catch((error) => {
          throw new Error('Error fetching data:', error.status)
        })
        
    }
  },[serchMovie]) 

 
  const rateChange = (e, key) => {
    setMovieData(prevMovieData => {
      const idx = prevMovieData.findIndex((el) => el.key === key)
      const newItem = { ...prevMovieData[idx], rate: e,  }
      return [
        ...prevMovieData.slice(0, idx),
        newItem,
        ...prevMovieData.slice(idx + 1)
      ]
    })
    
  }



  return (
    <Layout>
      <Flex justify="center">
        <Layout style={{ 'max-width': '1010px', backgroundColor: 'white', padding:'0 36px' }}>
            
          <Flex vertical style={{ height: '100%' }}>
            <HeaderMovie serchMovie={serchMovie} setSerchMovie={setSerchMovie}/>
            <MovieContent rateChange={rateChange} movieData={movieData} />
            <FooterMovie />
          </Flex>
        
        </Layout>
      </Flex>
    </Layout>
  )
  
}

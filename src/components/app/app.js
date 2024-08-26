import { Flex, Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import { Component } from 'react'

import getStaticResource from '../../services/getStaticResource'
import HeaderMovie from '../header-movie/header-movie'
import MovieContent from '../movie-content'

export default class Pup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieData: [],
    }
    this.rate = (e, id) => {
      this.setState(({ movieData }) => {
        const idx = movieData.findIndex((el) => el.id === id)
        const oldItem = movieData[idx]
        const newItem = { ...oldItem, rate: e }
        const newArr = [...movieData.slice(0, idx), newItem, ...movieData.slice(idx + 1)]
        return {
          movieData: newArr,
        }
      })
      
    }
  }

  componentDidMount() {
    getStaticResource()
      .then((result) => {
        this.setState({ movieData: result })
      })
      .catch((error) => {
        throw new Error('Error fetching data:', error.status)
      })
  }
 
 

  render() {
    const { movieData } = this.state
    return (
      <Layout>
        <Flex justify="center">
          <Layout style={{ 'max-width': '1010px', backgroundColor: 'white', padding:'0 36px' }}>
            
            <Flex vertical style={{ height: '100%' }}>
              <HeaderMovie />
              <MovieContent rate={this.rate} movieData={movieData} />
              <Footer style={{ 'margin-top': 'auto' }} />
            </Flex>
        
          </Layout>
        </Flex>
      </Layout>
    )
  }
}

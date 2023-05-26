import React from 'react'
import Champion from '../components/Champion'
import Latestnews from '../components/Latestnews'
import Aboutus from '../components/Aboutus'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Champion />
        <Aboutus />
        <Latestnews />
        <Footer />
    </div>
  )
}

export default Home
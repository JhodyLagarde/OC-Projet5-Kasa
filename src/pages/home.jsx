import React from 'react'
import Banner from '../components/banner'
import bannerImage from '../assets/home-picture.jpg'
import '../styles/pages-styles/home.scss'

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <p>Home</p>
    </div>
  )
}

export default Home

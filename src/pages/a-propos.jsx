import React from 'react'
import Banner from '../components/banner'
import bannerImage from '../assets/a-propos-picture.jpg'
import '../styles/pages-styles/a-propos.scss'

function Apropos() {
  return (
    <div>
      <Banner title="A Propos" image={bannerImage} />
      <p>A propos</p>
    </div>
  )
}

export default Apropos

import React from 'react'
import Banner from '../components/banner'
import Collapse from '../components/collapse'
import bannerImage from '../assets/a-propos-picture.png'
import AproposData from '../a-propos.json'
import '../styles/pages-styles/a-propos.scss'

function Apropos() {
  return (
    <div>
      <Banner title="A Propos" image={bannerImage} />
      <ul className="collapse-container">
        {AproposData.map(({ title, content }) => (
          <div key={`${title}`}>
            <Collapse title={title} content={content} />
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Apropos

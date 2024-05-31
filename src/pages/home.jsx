import React from 'react'
import Banner from '../components/banner'
import bannerImage from '../assets/home-picture.png'
import Card from '../components/card'
import data from '../logements.json'
import '../styles/pages-styles/home.scss'

function Home() {
  return (
    <main>
      <section>
        <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      </section>

      <section className="logements-cards-gallery">
        {data.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </section>
    </main>
  )
}

export default Home

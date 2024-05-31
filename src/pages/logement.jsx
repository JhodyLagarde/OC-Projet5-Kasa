import React from 'react'
import { useParams } from 'react-router-dom'
import logementData from '../logements.json'
import Carrousel from '../components/carrousel'
import Rate from '../components/rate'
import Collapse from '../components/collapse'
import Error from './404'
import '../styles/pages-styles/logement.scss'

function Logement() {
  const { id } = useParams()
  const currentLogement = logementData.find(
    (logementData) => logementData.id === id
  )
  if (currentLogement === undefined) {
    return <Error />
  }

  return (
    <main>
      <section>
        <Carrousel
          slides={currentLogement.pictures}
          alt={currentLogement.title}
        />
      </section>
      <section>
        <h1>{currentLogement.title}</h1>
        <h2>{currentLogement.location}</h2>
        <div>
          {currentLogement.tags.map((tag, id) => (
            <p key={id}>{tag}</p>
          ))}
        </div>
      </section>
      <aside>
        <div>
          <p>{currentLogement.host.name}</p>
          <img
            src={currentLogement.host.picture}
            alt={`portrait de ${currentLogement.host.name}`}
          />
        </div>
        <Rate rating={currentLogement.rating} />
      </aside>
      <section>
        <Collapse title={`Description`} content={currentLogement.description} />

        <Collapse
          title={`Equipements`}
          content={currentLogement.equipments.map((equipements, id) => (
            <div className="equipement-list" key={id}>
              {equipements}
            </div>
          ))}
        />
      </section>
    </main>
  )
}

export default Logement

import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components-styles/card.scss'

export default function Card({ id, title, cover }) {
  return (
    <div className="cards__container">
      <Link to={`/logement/${id}`}>
        <figure className="cards">
          <img className="cards__image" src={cover} alt={title} />
          <figcaption className="cards__title">{title}</figcaption>
        </figure>
      </Link>
    </div>
  )
}

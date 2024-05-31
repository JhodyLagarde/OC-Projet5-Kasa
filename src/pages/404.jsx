import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages-styles/404.scss'

function Error() {
  return (
    <section>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  )
}
export default Error

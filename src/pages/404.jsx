import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages-styles/404.scss'
import errorImg from '../assets/404.svg'

function Error() {
  return (
    <section className="error">
      <img src={errorImg} alt="Error 404 not found" className="error__img" />
      <p className="error__p">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error__link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}
export default Error

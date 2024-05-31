import React from 'react'
import '../styles/components-styles/banner.scss'

export default function Banner({ title, image }) {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <img className="banner__img" src={image} alt="Banner" />
    </div>
  )
}

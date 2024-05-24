import React from 'react'
import '../styles/components-styles/banner.scss'

export default function Banner({ title, image }) {
  return (
    <div className="banner">
      <h1 className="banner-title">{title}</h1>
      <img className="banner-img" src={image} alt="Banner" />
    </div>
  )
}

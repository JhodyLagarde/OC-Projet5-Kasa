import React, { useState } from 'react'
import bckArrow from '../assets/arrow-back.png'
import fwdArrow from '../assets/arrow-forward.png'
import '../styles/components-styles/carrousel.scss'

export default function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <div className="carrousel">
      {length > 1 && (
        <img
          src={bckArrow}
          alt="gauche"
          onClick={prevSlide}
          className="carrousel__arrow carrousel__arrow__leftArrow"
        />
      )}
      {length > 1 && (
        <img
          src={fwdArrow}
          alt="droite"
          onClick={nextSlide}
          className="carrousel__arrow carrousel__arrow__rightArrow"
        />
      )}
      {slides.map((slide, id, title) => (
        <div key={id} className={current === id ? 'slider active' : 'slider'}>
          {id === current && <img src={slide} alt={title} />}
          {id === current && (
            <span className="slider__number">
              {' '}
              {current + 1}/{length}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

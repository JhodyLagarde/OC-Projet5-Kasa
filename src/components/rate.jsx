import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/components-styles/rate.scss'

const activeStars = <FontAwesomeIcon icon={faStar} />
const stars = <FontAwesomeIcon icon={faStar} />

export default function Rate(props) {
  const rating = props.rating
  const totalStars = [1, 2, 3, 4, 5]
  return (
    <div>
      {totalStars.map((rangeElem) =>
        rating >= rangeElem ? (
          <span key={rangeElem.toString()} className="rating-stars__active">
            {activeStars}
          </span>
        ) : (
          <span key={rangeElem.toString()} className="rating-stars">
            {stars}
          </span>
        )
      )}
    </div>
  )
}

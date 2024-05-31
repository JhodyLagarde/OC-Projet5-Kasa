import React from 'react'
import '../styles/components-styles/collapse.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const collapseArw = <FontAwesomeIcon icon={faAngleUp} />

export default function Collapse({ title, content }) {
  const [active, setActive] = useState(false)

  const handleCollapse = () => {
    setActive(!active)
  }

  return (
    <div className={`collapse ${active && 'active'}`}>
      <div className="collapse__title">
        {title}
        <span onClick={handleCollapse}>{collapseArw}</span>{' '}
      </div>
      <div className="collapse__content">{content}</div>
    </div>
  )
}

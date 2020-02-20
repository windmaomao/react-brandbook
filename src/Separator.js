import React from 'react'
import PropTypes from 'prop-types'

const Separator = ({ title, onNext }) => {
  const onClick = e => { onNext && onNext() }
  return (
    <div className="book-separator">
      <div className="story-title" onClick={onClick}>{title}</div>
    </div>
  )
}

Separator.propTypes = {
  title: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
}

export default Separator


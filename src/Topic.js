import React, { useState, useCallback } from 'react'

const Topic = ({ title, stories }) => {
  if (!stories || !stories.length) return null

  const [selected, setSelected] = useState(stories[0])
  const onClick = story => useCallback(e => { setSelected(story) })

  return (
    <div className="book-topic">
      <div className="story-head">
        <div className="story-title">{title}</div>
        <div className="story-list">
          {stories.map((story, i) => (
            <span
              key={i}
              onClick={onClick(story)}
              className={selected === story ? 'active' : ''}
            >{story.title}</span>
          ))}
        </div>
        <div className="story-text">{selected.text || ''}</div>
      </div>
      <div className="story-body">
        {selected.body || null}
      </div>
    </div>
  )
}

export default Topic
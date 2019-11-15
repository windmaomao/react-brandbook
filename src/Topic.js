import React, { useState, useCallback } from 'react'

const Topic = ({ title, stories, onNext }) => {
  if (!stories || !stories.length) return null

  const [selected, setSelected] = useState(stories[0])
  const onClick = story => useCallback(e => { setSelected(story) })
  const onNextClick = useCallback(e => {
    const index = stories.indexOf(selected)
    if (index < stories.length - 1) {
      setSelected(stories[index + 1])
    } else {
      onNext && onNext()
    }
  })

  const storyBody = selected.body ?
    React.cloneElement(selected.body, {
      ...selected, onNextClick
    }) : null

  return (
    <div className="book-topic">
      <div className="story-next" onClick={onNextClick}>></div>
      <div className="story-head">
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
      <div className="story-body">{storyBody}</div>
    </div>
  )
}

export default Topic
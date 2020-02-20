import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import storage from './storage'

const storyStorage = storage('story')

const Topic = ({ stories, onNext, goto }) => {
  if (!stories || !stories.length) return null

  const [selected, setSelected] = useState(storyStorage.load(stories))
  const onClick = story => useCallback(e => {
    storyStorage.save(stories, setSelected)(story)
  })
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
      story: { ...selected, onNextClick, goto }
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

Topic.propTypes = {
  stories: PropTypes.array,
  onNext: PropTypes.func,
  goto: PropTypes.func,
}

Topic.defaultProps = {
  stories: [],
  onNext: undefined,
  goto: () => { }
}

export default Topic
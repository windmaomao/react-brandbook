import React, { useCallback } from 'react'
import classNames from 'classnames'

const Nav = ({
  title, logo,
  topics, topic, onTopic,
  themes, theme, onTheme,
  layouts, layout, onLayout,
}) => {
  const activeClass = (t, current) => t === current ? 'active' : ''
  const onClick = t => useCallback(e => {
    if (t.separator) return
    onTopic && onTopic(t)
  })
  return (
    <div className="book-nav">
      <div className="book-title">{title}</div>
      <div className="book-logo">{logo}</div>
      <div className="theme-list">
        {themes.map((t, i) => (
          <span
            key={i}
            onClick={e => { onTheme(t) }}
            className={activeClass(t, theme)}
          >{t.title}</span>
        ))}
        {layouts.map((t, i) => (
          <span
            key={i}
            onClick={e => { onLayout(t) }}
            className={activeClass(t, layout)}
          >{t.title}</span>
        ))}
      </div>
      <div className="topic-list">
        {topics.map((t, i) => (
          <span
            key={i}
            onClick={onClick(t)}
            className={classNames({
              'active': t === topic,
              'separator': t.separator
            })}
          >{t.title}</span>
        ))}
      </div>
    </div>
  )
}

export default Nav
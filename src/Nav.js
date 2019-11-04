import React from 'react'

const Nav = ({
  title, logo,
  topics, topic, onTopic,
  themes, theme, onTheme
}) => {
  const activeClass = (t, current) => t === current ? 'active' : ''
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
      </div>
      <div className="topic-list">
        {topics.map((t, i) => (
          <span
            key={i}
            onClick={e => { onTopic(t) }}
            className={activeClass(t, topic)}
          >{t.title}</span>
        ))}
      </div>
    </div>
  )
}

export default Nav
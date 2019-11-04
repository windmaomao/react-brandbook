import React from 'react'
import styled from 'styled-components'
import Var, { background, foreground } from './variables'

const NavDiv = styled.div`
  font-family: ${Var.fontFamily.light};
  background-color: ${foreground};
  color: ${background};
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px 10px;
  .book-title {
    font-family: ${Var.fontFamily.headline};
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.5px;
    line-height: 25px;
    order: 0;
  }
  .theme-list, .topic-list {
    display: flex;
    span {
      cursor: pointer;
      margin-right: 10px;
      &.active {
        font-family: ${Var.fontFamily.bold};
        font-weight: bold;
      }
    } 
  }
  .topic-list {
    flex: 1 0 100%;
    margin: 10px 0 0;
  }
`

const Nav = ({ 
  title, logo,
  topics, topic, onTopic,
  themes, theme, onTheme
}) => {
  const activeClass = (t, current) => t === current ? 'active' : ''
  return (
    <NavDiv>
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
    </NavDiv>
  )
}

export default Nav
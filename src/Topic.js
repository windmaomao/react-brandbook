import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Var, { background, foreground } from './variables'

const TopicDiv = styled.div`
  background-color: ${background};
  color: ${foreground};
  padding: 10px;
  .story-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    .story-title {
      font-size: 20px;
      font-weight: bold;
      order: 0;
      display: none;
    }
    .story-text {
      flex: 1 0 auto;
      font-family: ${Var.fontFamily.light};
      font-size: 14px;
      margin: 10px 10px 0;
    }
    .story-list {
      flex: 1 0 100%;
      display: flex;
      border-bottom: 1px solid #888;
      span {
        cursor: pointer;
        margin-right: 15px;
        line-height: 30px;
        &.active {
          font-weight: bold;
          font-family: ${Var.fontFamily.bold};
          border-bottom: 1px solid ${foreground};
        }
      } 
    }
  }
  .story-body {
    padding-bottom: 80px;
    h4 {
      font-family: ${Var.fontFamily.headline};
      font-size: 16px;
      letter-spacing: 1px;
      margin-top: 50px;
    }
  }
`

const Topic = ({ title, stories }) => {
  if (!stories || !stories.length) return null

  const [selected, setSelected] = useState(stories[0])
  const onClick = story => useCallback(e => { setSelected(story) })

  return (
    <TopicDiv>
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
    </TopicDiv>
  )
}

export default Topic
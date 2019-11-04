import React from 'react'
import styled from 'styled-components'

const StoryDiv = styled.div`
  .story-head {
  }
`

const Story = ({ story }) => {
  if (typeof story === "function") {
    return story
  }
  return (
    <StoryDiv>
      <div className="story-head">{story.text}</div>
      <div className="story-body">{story.body}</div>
    </StoryDiv>
  )
}

export default Story
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Nav from './Nav'
import Topic from './Topic'
import Var from './variables'

const BookDiv = styled.div`
  font-family: ${Var.fontFamily.default};
`

const Book = ({ title, logo, topics, themes, initTopic }) => {
  const [topic, setTopic] = useState(topics[initTopic || 0])
  const [theme, setTheme] = useState(themes[0])

  return (
    <ThemeProvider theme={theme.theme}>
      <BookDiv>
        <Nav 
          title={title}
          logo={logo}
          topics={topics} 
          topic={topic}
          onTopic={setTopic}
          themes={themes}
          theme={theme}
          onTheme={setTheme}
        />
      <Topic
        key={topic.title}
        title={topic.title}
        stories={topic.stories}
      />
      </BookDiv>
    </ThemeProvider>
  )
}

export default Book
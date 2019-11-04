import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Nav from './Nav'
import Topic from './Topic'
import DefaultDiv from './Div'

const Book = ({ Div, title, logo, topics, themes, initTopic }) => {
  const [topic, setTopic] = useState(topics[initTopic || 0])
  const [theme, setTheme] = useState(themes[0])

  return (
    <ThemeProvider theme={theme.theme}>
      <Div>
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
      </Div>
    </ThemeProvider>
  )
}

Book.propTypes = {
  Div: PropTypes.func,
  title: PropTypes.node,
  logo: PropTypes.node,
  topics: PropTypes.array,
  themes: PropTypes.array,
}

Book.defaultProps = {
  Div: DefaultDiv,
  title: 'Brandbook',
  logo: 'Logo',
  topics: [],
  themes: [],
}

export default Book
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Nav from './Nav'
import Topic from './Topic'
import DefaultDiv from './Div'
import storage from './storage'

const topicStorage = storage('topic')
const themeStorage = storage('theme')
const layoutStorage = storage('layout')

const Book = ({ Div, title, logo, topics, themes, layouts }) => {
  const [topic, setTopic] = useState(topicStorage.load(topics))
  const [theme, setTheme] = useState(themeStorage.load(themes))
  const [layout, setLayout] = useState(layoutStorage.load(layouts))

  return (
    <ThemeProvider theme={theme.theme}>
      <Div direction={layout.direction}>
        <Nav
          title={title}
          logo={logo}
          topics={topics}
          topic={topic}
          onTopic={topicStorage.save(topics, setTopic)}
          themes={themes}
          theme={theme}
          onTheme={themeStorage.save(themes, setTheme)}
          layouts={layouts}
          layout={layout}
          onLayout={layoutStorage.save(layouts, setLayout)}
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
  Div: PropTypes.object,
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
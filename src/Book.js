import React, { useState, useCallback } from 'react'
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
  const onNext = useCallback(() => {
    const i = topics.indexOf(topic)
    if (i < topics.length - 1) {
      topicStorage.save(topics, setTopic)(topics[i + 1])
    }
  })
  const canNext = topics.indexOf(topic) < (topics.length - 1)

  return (
    <ThemeProvider theme={theme.theme}>
      <Div direction={layout.direction} cover={topic.separator}>
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
          separator={topic.separator}
          onNext={onNext}
          canNext={canNext}
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
  layouts: PropTypes.array,
}

Book.defaultProps = {
  Div: DefaultDiv,
  title: 'Brandbook',
  logo: 'Logo',
  topics: [],
  themes: [],
  layouts: [],
}

export default Book
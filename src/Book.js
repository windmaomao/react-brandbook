import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Nav from './Nav'
import Topic from './Topic'
import Separator from './Separator'
import DefaultDiv from './Div'
import storage from './storage'
import locate from './locate'

const topicStorage = storage('topic')
const storyStorage = storage('story')
const themeStorage = storage('theme')
const layoutStorage = storage('layout')

const Book = ({ Div, title, logo, topics, themes, layouts }) => {
  const [reload, setReload] = useState(0)
  const [topic, setTopic] = useState(topicStorage.load(topics))
  const [theme, setTheme] = useState(themeStorage.load(themes))
  const [layout, setLayout] = useState(layoutStorage.load(layouts))

  useEffect(() => {
    setTopic(topicStorage.load(topics))
  }, [reload])

  const onNext = useCallback(() => {
    const i = topics.indexOf(topic)
    if (i < topics.length - 1) {
      topicStorage.save(topics, setTopic)(topics[i + 1])
    }
  })
  const canNext = topics.indexOf(topic) < (topics.length - 1)
  const goto = useCallback((search) => {
    const t = locate(topics).findTopic(search)
    topicStorage.save(topics)(t)
    storyStorage.save(topic.stories)(null)
    setReload(reload + 1)
  })

  return (
    <ThemeProvider theme={theme.theme}>
      <Div
        direction={layout.direction}
        reverse={layout.reverse}
        cover={topic.separator}
      >
        <Nav
          title={title}
          logo={logo}
          topics={topics}
          topic={topic}
          onTopic={topic => {
            topicStorage.save(topics, setTopic)(topic)
            storyStorage.save(topic.stories)(null)
          }}
          themes={themes}
          theme={theme}
          onTheme={themeStorage.save(themes, setTheme)}
          layouts={layouts}
          layout={layout}
          onLayout={layoutStorage.save(layouts, setLayout)}
        />
        {topic.separator ? (
          <Separator
            key={topic.title}
            title={topic.title}
            onNext={onNext}
          />
        ) : (
            <Topic
              key={topic.title}
              title={topic.title}
              stories={topic.stories}
              separator={topic.separator}
              goto={goto}
              onNext={onNext}
              canNext={canNext}
            />
          )}
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

const fontFamily = 'inherit'

const defaultThemes = [
  { title: 'Light', theme: { mode: 'light', fontFamily } },
  { title: 'Dark', theme: { mode: 'dark', fontFamily } }
]
const defaultLayouts = [
  { title: 'Top', direction: 'column' },
  { title: 'Bottom', direction: 'column', reverse: true },
  { title: 'Left', direction: 'row' },
  { title: 'Right', direction: 'row', reverse: true }
]

Book.defaultProps = {
  Div: DefaultDiv,
  title: 'Brandbook',
  logo: 'Logo',
  topics: [],
  themes: defaultThemes,
  layouts: defaultLayouts
}

export default Book
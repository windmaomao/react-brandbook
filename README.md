# React Brandbook

Quickly setup branding style guide website.

## Usage

```javascript
  ReactDOM.render(
    <Book
      title={title}
      logo={logo}
      topics={topics}
      themes={themes}
      layouts={layouts}
      // Div={Div}
    />,
    document.getElementById('root')
  )
```

where

```javascript
  const title = 'Brandnet'
  const topics = [
    { title: 'Button', stories: buttonStories },
    { title: 'Icon', stories: iconStories },
    { title: 'Nav', stories: navStories },
    { title: 'Title', stories: titleStories },
    { title: 'Utils', separator: true },
    { title: 'Grid', stories: gridStories },
    { title: 'Tuts', separator: true },
    { title: 'Spec', stories: specStories },
    { title: 'Tutorial', stories: tutorialStories },
  ]
  const themes = [
    { title: 'Light', theme: { mode: 'light' } },
    { title: 'Dark', theme: { mode: 'dark' } }
  ]
  const layouts = [
    { title: 'Top', direction: 'column' },
    { title: 'Left', direction: 'row' }
  ]
  const logo = (
    <Icon
      size={'auto'}
      width={'106px'}
      height={'36px'}
      viewBox={'0 0 283.465 95.318'}
      children={<Logo />}
      button
      style={{ position: 'relative', top: '-3px' }}
    />
  )
```
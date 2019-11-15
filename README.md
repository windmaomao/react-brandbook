# React Brandbook

Quickly setup a brand book with title, logo and a list of topics (with sub-topics). 

It supports multiple themes and layouts where you can switch between different flavour of theme and page layout. 

It is especially suitable for portfolios, style guides, resumes, or just any slides like pages.

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

where inputs are defined as,

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

where each `stories` are defined as,

```javascript
  const buttonStories = [
    {
      title: 'Normal',
      text: 'Normal button states',
      body: <Buttons />
    },
    {
      title: 'Disabled',
      text: 'Disabled button states',
      body: <Buttons disabled />
    },
    {
      title: 'Outlined',
      text: 'Outlined button states',
      body: <Buttons outlined />
    },
  ]
```

where `body` can be any node or component,

```javascript
  const Cover = ({ title, text, next, onNextClick }) => (
    <div className="splash-content">
      <h1>{title}</h1>
      <p>{text}</p>
      <p>
        <Button onClick={onNextClick}>
          {next || 'Next'} &nbsp;
        </Button>
      </p>
    </div>
  )
```
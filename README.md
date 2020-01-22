# React Brandbook

Quickly setup a brand book with title, logo and a list of topics (with sub-topics). 

It supports multiple themes and layouts where you can switch between different flavour of theme and page layout. 

It is especially suitable for portfolios, style guides, resumes, or just any slides like pages.

## Usage

```javascript
  ReactDOM.render(
    <Book />,
    document.getElementById('root')
  )
```

where props supported includes,

### Title and Logo

You can replace them with any element, ex. 

```javascript
  const title = 'MyBook'
  const logo = (
    <Icon
      size={'auto'}
      children={<Logo />}
      style={{ position: 'relative', top: '-3px' }}
    />
  )

  <Book title={title} logo={logo} />
```

### Topic

Each topic is a page that can be specified via an object with title and stories inside. 

```javascript
  const topics = [
    { title: 'Button', stories: buttonStories }
  ]
```

where each story again can be defined with `title`, `text` and `body`. 

```javascript
  const Demo = ({ story }) => ()
  const buttonStories = [
    {
      title: 'Normal',
      text: 'Normal button states',
      body: <Demo />
    },
    ...
  ]
```

Each story can be added via `body` attributes of topic stories. And it can be decorated with `story` as input if needed.


### Navigation

In order to navigate from one topic to another topic, you can use `story.goto(search)`, where `search` is the topic name that you want to go to. 

```javascript
  const Demo = ({ story }) => {
    const onClick = e => { story.goto('Button') }
    return (
      <p>Used in <code onClick={onClick}>Button</code></p>
    )
  }
```





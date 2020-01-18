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

### Topics

Each topic is a page that is provided by via and object with title and stories. 

```javascript
  const topics = [
    { title: 'Button', stories: buttonStories }
  ]
```

where each story is defined as an objecgt with `title`, `text` and `body`. 

```javascript
  const buttonStories = [
    {
      title: 'Normal',
      text: 'Normal button states',
      body: <Buttons />
    },
    ...
  ]
```


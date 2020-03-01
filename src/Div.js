import styled from 'styled-components'
import { background, foreground, fontFamily } from './variables'

const flexDirection = props => {
  var dir = props.direction
  if (props.reverse) dir += '-reverse'
  return dir
}

const logoDirection = props => {
  var dir = props.direction
  return dir === 'row' ? 'column' : 'row'
}

const Div = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: ${fontFamily};
  display: flex;
  flex-direction: ${flexDirection};
  .book-nav {
    background-color: ${foreground};
    color: ${background};
    display: flex;
    flex-wrap: wrap;

    .nav-logo {
      margin: 15px 0;
      display: flex;
      flex-direction: ${logoDirection};
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0.5px;
      line-height: 25px;
    }

    .theme-list, .topic-list {
      display: flex;
      > span {
        cursor: pointer;
        margin-right: 8px;
        &.active {
          font-weight: bold;
        }
      } 
    }
    .theme-list {
      font-size: 13px;
      font-weight: 200;
    }
    .topic-list {
      font-weight: 200;
      flex: 1 0 100%;
      margin: 5px 0;
    }

    ${props => props.direction !== 'row' ? `
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      .topic-list {
        > span {
          &.separator {
            .text {
              display: none;
            }
            .symbol {
              opacity: 0.3;
            }
          }
        }
      }
    `: `
      flex: 0 0 150px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: baseline;
      padding: 40px;
      min-height: 100vh;
      .theme-list {
        margin-top: 10px;
      }
      .topic-list {
        flex: 0 0 auto;
        flex-direction: column;
        flex-wrap: wrap;
        margin-top: 20px;
        span {
          line-height: 22px;
          &.separator {
            display: block;
            font-size: 12px;
            margin-top: 15px;
            opacity: 0.6;
            .symbol {
              display: none;
            }
          }
        }
      }
    `}
  }

  .book-topic {
    flex: 1 1 auto;
    background-color: ${background};
    color: ${foreground};
    padding: ${props => props.cover ? '0' : '20px'};
    position: relative;
    .story-next {
      float: right;
      cursor: pointer;
    }
    .story-head {
      display: ${props => props.cover ? 'none' : 'flex'};
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 20px;
      .story-text {
        flex: 1 0;
        weight: 200;
        font-size: 14px;
        margin: 10px 0;
        line-height: 1.4;
        b {
          font-weight: bold;
        }
      }
      .story-breadcrumb {
        margin-bottom: 0.5em;
      }
      .story-list {
        flex: 1 0 100%;
        display: flex;
        border-bottom: 1px solid #888;
        span {
          cursor: pointer;
          margin-right: 15px;
          line-height: 30px;
          &.active {
            font-weight: bold;
            border-bottom: 1px solid ${foreground};
          }
        } 
      }
    }
    .story-body {
      padding-bottom: 80px;
      color: ${foreground};
    }
  }

  ${props => props.direction !== 'row' ? `
  ` : `
    .book-topic {
      margin: 0 auto;
    }    
  `}

  .book-separator {
    flex: 1 1 auto;
    background-color: ${background};
    color: ${foreground};
    padding: 20px;
    position: relative;
    .story-title {
      cursor: pointer;
      position: absolute;
      top: 40vh;
      width: 100%;
      text-align: center;
      font-size: 20px;
    }
  }
`

export default Div
import styled from 'styled-components'
import { background, foreground, fontFamily } from './variables'

const flexDirection = props => {
  var dir = props.direction
  if (props.reverse) dir += '-reverse'
  return dir
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

    .book-title {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.5px;
      line-height: 25px;
      order: 0;
    }

    .theme-list, .topic-list {
      display: flex;
      > span {
        cursor: pointer;
        margin-right: 8px;
        &.active, &.separator {
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
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      .book-title {
        margin-left: 5px;
      }
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
      .book-logo {
        order: -1
      }
      .theme-list {
        margin-top: 20px;
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
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
    .story-head {
      display: ${props => props.cover ? 'none' : 'flex'};
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 20px;
      .story-text {
        flex: 1 0 auto;
        weight: 200;
        font-size: 14px;
        margin: 10px 10px 0;
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
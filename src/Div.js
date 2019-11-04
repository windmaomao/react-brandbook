import styled from 'styled-components'
import Var, { background, foreground } from './variables'

const Div = styled.div`
  font-family: ${Var.fontFamily.default};
  .book-nav {
    font-family: ${Var.fontFamily.light};
    background-color: ${foreground};
    color: ${background};
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 10px 10px;
    .book-title {
      font-family: ${Var.fontFamily.headline};
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.5px;
      line-height: 25px;
      order: 0;
    }
    .theme-list, .topic-list {
      display: flex;
      span {
        cursor: pointer;
        margin-right: 10px;
        &.active {
          font-family: ${Var.fontFamily.bold};
          font-weight: bold;
        }
      } 
    }
    .topic-list {
      flex: 1 0 100%;
      margin: 10px 0 0;
    }    
  }
  .book-topic {
    background-color: ${background};
    color: ${foreground};
    padding: 10px;
    .story-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      .story-title {
        font-size: 20px;
        font-weight: bold;
        order: 0;
        display: none;
      }
      .story-text {
        flex: 1 0 auto;
        font-family: ${Var.fontFamily.light};
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
            font-family: ${Var.fontFamily.bold};
            border-bottom: 1px solid ${foreground};
          }
        } 
      }
    }
    .story-body {
      padding-bottom: 80px;
      h4 {
        font-family: ${Var.fontFamily.headline};
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: 50px;
      }
    }    
  }
`

export default Div

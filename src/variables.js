const colors = {
  black: 'black',
  white: 'white'
}

const isDark = theme => theme.mode === 'dark'

const background = props =>
  props.theme.mode === 'dark' ? colors.black : colors.white

const foreground = props =>
  props.theme.mode === 'dark' ? colors.white : colors.black

const fontFamily = props =>
  props.theme.fontFamily || ''

export {
  isDark, background, foreground,
  fontFamily
}

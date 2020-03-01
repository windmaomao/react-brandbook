import './polyfills'

const getItem = name => {
  const urlParams = new URLSearchParams(window.location.search)
  const v = urlParams.get(name) || ''
  if (v) return v
  return localStorage.getItem(name)
}

const storage = name => ({
  load: items => {
    if (!items || items.length < 1) return {}
    const last = parseInt(getItem(name))
    if (last < items.length && last >= 0) return items[last]
    return items[0]
  },
  save: (items, setItem) => item => {
    if (!items || items.length < 1) return
    const found = items.indexOf(item)
    const index = found >= 0 ? found : 0
    localStorage.setItem(name, index)
    setItem && setItem(item)
  }
})

export default storage
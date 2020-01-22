const storage = name => ({
  load: items => {
    if (!items || items.length < 1) return {}
    const last = parseInt(localStorage.getItem(name))
    if (last < items.length && last >= 0) return items[last]
    return items[0]
  },
  save: (items, setItem) => item => {
    const found = items.indexOf(item)
    const index = found >= 0 ? found : 0
    localStorage.setItem(name, index)
    setItem && setItem(item)
  }
})

export default storage
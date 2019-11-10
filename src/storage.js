const storage = name => ({
  load: items => {
    const last = parseInt(localStorage.getItem(name))
    if (last < items.length) return items[last]
    return items[0]
  },
  save: (items, setItem) => item => {
    const index = items.indexOf(item)
    if (index >= 0) {
      localStorage.setItem(name, index)
      setItem(item)
    }
  }
})

export default storage
const locate = (items) => ({
  findTopic: title => items.find(item => item.title === title)
})

export default locate
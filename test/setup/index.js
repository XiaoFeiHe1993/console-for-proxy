const RealDate = Date

global.Date = jest.fn((time) => {
  if (!time) {
    return new RealDate('2022-11-28')
  }
  return new RealDate(time)
})

global.Date.now = RealDate.now

global.Timer = (fn = () => '', time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

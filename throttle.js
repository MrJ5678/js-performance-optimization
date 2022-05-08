function throttle(callback, wait) {
  if (typeof callback !== "function")
    throw new Error("callback must be a function")
  if (typeof wait === "undefined") wait = 400

  let previous = 0 // 用来记录上一次的
  let timer = null
  return function proxy(...args) {
    let self = this
    let current = new Date() // 用来记录当前的
    let interval = wait - (current - previous)
    if (interval <= 0) {
      clearTimeout(timer)
      timer = null
      // 非高频操作
      callback.call(self, ...args)
      previous = new Date()
    } else if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null
        callback.call(self, ...args)
        previous = new Date()
      }, interval)
    }
  }
}

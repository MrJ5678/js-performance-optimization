function debounce(callback, wait, immediate) {
  if(typeof callback !== 'function') throw new Error('callback must be a function')
  if(typeof wait === 'undefined') wait = 300
  if(typeof wait === 'boolean') {
    immediate = wait
    wait = 300
  }
  if(typeof immediate !== 'boolean') immediate = false

  let timer
  return function proxy(...args) {
    let self = this,
        init = immediate && !timer
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      !immediate ? callback.call(self, ...args) : null
    }, wait);
    init ? callback.call(self, ...args) : null
  }
}
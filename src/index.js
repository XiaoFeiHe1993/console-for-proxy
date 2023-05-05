function toRaw(observed) {
  const raw = observed?.["__v_raw"]
  return raw ? toRaw(raw) : observed
}

(function() {
  const _logFn = console.log

  console.log = function() {
    if (arguments?.length > 0) {
      const result = Array.from(arguments).map(item => {
        if (item?.__v_isRef) {
          return toRaw(item.value)
        } else {
          return toRaw(item)
        }
      })
      _logFn(...result)
    }
  }
})()

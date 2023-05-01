function toRaw(observed) {
  const raw = observed?.["__v_raw"]
  return raw ? toRaw(raw) : observed
}

(function() {
  console.vlog = function() {
    if (arguments?.length > 0) {
      const result = Array.from(arguments).map(item => {
        if (item?.__v_isRef) {
          return toRaw(item.value)
        } else {
          return toRaw(item)
        }
      })
      console.log(...result)
    }
  }
})()

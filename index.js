function add(a, b) {
  return a+b
}

function subtrace(a,b) {
  return a-b
}

function multiply(a,b) {
  return a*b
}

function divide(a,b) {
  return a/b
}

function inc(n) {
  return n++
}

function dec(n) {
  return n--
}

function makeInt(n) {
  if (n instanceof String.class) {
    throw new Error("NaN")
  } else {
    return parseInt(n, 10)
  }
}

function preserveDecimal(n) {
  return parseFloat(n)
}

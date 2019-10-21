export const formatPrice = x => {
  let price = x

  if (price.includes(".")) {
    price = price.split(".")[0]
  }

  if (price.includes(",") || price.length < 4) {
    return `$${price}`
  } else {
    let a = price.slice(-3)
    let b = price.slice(0, -3)

    return `$${b},${a}`
  }
}

export const formatName = name => {
  let formatted = name.toLowerCase().split("")
  formatted[0] = formatted[0].toUpperCase()
  return formatted.join("")
}

import { formatPrice, formatName } from "./helpers"

test("price values to be formatted to $1,000 format", () => {
  expect(formatPrice("20.00")).toBe("$20")
  expect(formatPrice("20.0")).toBe("$20")
  expect(formatPrice("2000.00")).toBe("$2,000")
})

test("name is capitalized", () => {
  expect(formatName("kevin")).toBe("Kevin")
  expect(formatName("KEVIN")).toBe("Kevin")
})

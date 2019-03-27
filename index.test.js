const Calc = require("./index")

describe("Calculator tests", () => {
  test("should be able to add 1 + 1", () => {
    expect(new Calc(1).add(1)).toEqual({ num: 2 })
  })

  test("should be able to add multiple numbers", () => {
    expect(new Calc(1).add(1).add(1)).toEqual({ num: 3 })
  })

  test("should be able to multiply 1*2=2",()=>{
    expect(new Calc(1).multiply(2)).toEqual({num:2})
  })

  test("should be able to divide 6/2=3",()=>{
    expect(new Calc(6).divide(2)).toEqual({num:3})
  })



  test("Dont accept strings", () => {
    expect(() => new Calc(100).add("onehundret")).toThrow("No strings allowed")
  })

  test("Dont accept object", () => {
    expect(() => new Calc(100).add({ num: "onehundret" })).toThrow(
      "No object allowed"
    )
  })
})

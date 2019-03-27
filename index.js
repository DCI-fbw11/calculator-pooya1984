class Calc {
  constructor(num) {
    this.num = num
  }
  add(numToAdd) {
    this.throwOnBadDatatype(numToAdd)
    this.num = this.num + numToAdd
    return this
  }
   multiply(numToMultiply){
    this.throwOnBadDatatype(numToMultiply)
    this.num = this.num * numToMultiply
    return this
  }

  divide(numToDivide){
    this.throwOnBadDatatype(numToDivide)
    this.num = this.num / numToDivide
    return this
  }

  throwOnBadDatatype(numToAdd) {
    if (typeof numToAdd === "string") {
      throw new Error("No strings allowed")
    }

    if (typeof numToAdd === "object") {
      throw new Error("No object allowed")
    }
  }
}

module.exports = Calc

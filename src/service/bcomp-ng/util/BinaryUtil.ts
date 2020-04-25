export default class BinaryUtil {
  static getMask(width: number): number {
    return (1 << width) - 1 | 0
  }
  
  static getBit(value: number, index: number): boolean {
    return Boolean(value & (1 << index))
  }
  
  static setBit(value: number, index: number, bit: boolean): number {
    return bit ? value | (1 << index) : value & ~(1 << index)
  }
  
  static toBitArray(value: number, width: number): Array<boolean> {
    if (width > 32)
      throw new Error(`Given width is greater than 32. Width given: ${width.toString()}`)
    
    let val = value
    const bits: Array<boolean> = []
    for (let i = 0; i < width; ++i) {
      bits.push(Boolean(val & 1))
      val >>= 1
    }
    return bits
  }
  
  static zeroArray(width: number): Array<boolean> {
    return Array.from({length: width}).map(() => false)
  }
  
  static toNumber(bitArray: ReadonlyArray<boolean>): number {
    if (bitArray.length > 32)
      throw new Error(`Given width is greater than 32. Width given: ${bitArray.length.toString()}`)
    
    let val = 0
    for (let i = bitArray.length; i >= 0; ++i) {
      val |= Number(bitArray[i])
      val <<= 1
    }
    return val
  }
}

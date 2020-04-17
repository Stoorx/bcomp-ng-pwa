import BasicElement from '@/service/bcomp-ng/elements/BasicElement'

export interface Register extends BasicElement {
  /**
   * Get value of particular bit
   * @param index
   * @return Value of particular bit
   */
  getBit(index: number): boolean
  
  /**
   * Get width of register
   * @return Count of bits in register
   */
  width(): number
}

export default interface MutableRegister extends Register {
  /**
   * Sets particular bit of register
   * @param index index of bit to change
   * @param bit new value for bit
   * @return old value if bit
   */
  setBit(index: number, bit: boolean): void
}


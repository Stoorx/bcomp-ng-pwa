import MutableRegister from '@/service/bcomp-ng/elements/Register'
import BinaryUtil from '@/service/bcomp-ng/util/BinaryUtil'
import {DataValue, NumericDataValue} from '@/service/bcomp-ng/util/DataValue'

export default class NumericRegister implements MutableRegister {
  protected _value: number
  protected _width: number
  protected _mask: number
  
  constructor(width: number, value?: number) {
    if (width > 32)
      throw new Error('Given width is greater than 32')
    
    this._width = width
    this._mask = BinaryUtil.getMask(width)
    this._value = value && (value & this._mask) || 0
  }
  
  toString(): string {
    return this._value.toString(2)
  }
  
  getBit(index: number): boolean {
    return BinaryUtil.getBit(this._value, index)
  }
  
  setBit(index: number, bit: boolean): void {
    this._value = BinaryUtil.setBit(this._value, index, bit)
  }
  
  width(): number {
    return this._width;
  }
  
  //
  // getValueAsBitArray(): ReadonlyArray<boolean> {
  //   return BinaryUtil.toBitArray(this._value, this._width);
  // }
  //
  // getValueAsNumber(): number {
  //   return this._value;
  // }
  //
  // setValueAsBitSet(value: ReadonlyArray<boolean>): void {
  //   this._value = BinaryUtil.toNumber(value.length === this._width ? value : value.slice(0, this._width))
  // }
  //
  // setValueAsNumber(value: number): void {
  //   this._value = value & this._mask
  // }
  
  getValue(): DataValue {
    return new NumericDataValue(this._width, this._value);
  }
}

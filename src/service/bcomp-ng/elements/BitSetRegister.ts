import MutableRegister from '@/service/bcomp-ng/elements/Register'
import BinaryUtil from '@/service/bcomp-ng/util/BinaryUtil'
import {BitsetDataValue, DataValue} from '@/service/bcomp-ng/util/DataValue'

export default class BitSetRegister implements MutableRegister {
  protected _value: boolean[]
  protected _width: number
  
  constructor(width: number, value?: boolean[]) {
    this._width = width
    this._value = value?.slice(0, width) || BinaryUtil.zeroArray(width)
  }
  
  toString(): string {
    return this._value.toString()
  }
  
  getBit(index: number): boolean {
    return this._value[index]
  }
  
  setBit(index: number, bit: boolean): void {
    this._value[index] = bit
  }
  
  width(): number {
    return this._width;
  }
  
  getValue(): DataValue {
    return new BitsetDataValue(this._width, this._value);
  }
}

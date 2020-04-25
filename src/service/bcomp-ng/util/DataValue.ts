/**
 * Base immutable interface for all data containers
 */
import BinaryUtil from '@/service/bcomp-ng-old/util/BinaryUtil'
import _ from 'lodash'

export interface DataValue {
  /**
   * Check whether the values are equal
   */
  equals(other: DataValue): boolean
  
  /**
   * Get value as array of bits
   * @return Value as array of bits. LSB first
   */
  asBitArray(): ReadonlyArray<boolean>
  
  /**
   * Get value as number
   * @return Value as number
   * @throws {}
   */
  asNumber(): number
  
  /**
   * Get width of data
   */
  width(): number
}

/**
 * Base mutable interface for all data containers
 */
export interface MutableDataValue extends DataValue {
  /**
   * Set new value from array of bits
   * @param value New value of data element
   */
  fromBitSet(value: ReadonlyArray<boolean>): void
  
  /**
   * Set new value from number
   * @param value New value of data element
   */
  fromNumber(value: number): void
}

/**
 *
 */
export class ZeroDataValue implements DataValue {
  private readonly _width: number
  private readonly _array = BinaryUtil.zeroArray(this._width)
  
  constructor(width: number) {
    this._width = width
  }
  
  asBitArray(): ReadonlyArray<boolean> {
    return this._array
  }
  
  asNumber(): number {
    return 0
  }
  
  width(): number {
    return this._width
  }
  
  equals(other: DataValue): boolean {
    if (other instanceof ZeroDataValue) {
      return this.width() === other.width();
    }
    return other.equals(this)
  }
}

export class NumericDataValue implements DataValue {
  protected _width: number
  protected _value: number
  
  constructor(width: number, value?: number) {
    if (width > 32)
      throw new Error('Given width is greater than 32')
    
    this._width = width
    this._value = value && (value & BinaryUtil.getMask(width)) || 0
  }
  
  asBitArray(): ReadonlyArray<boolean> {
    return BinaryUtil.toBitArray(this._value, this._width)
  }
  
  asNumber(): number {
    return this._value
  }
  
  width(): number {
    return this._width
  }
  
  equals(other: DataValue): boolean {
    if (other instanceof NumericDataValue) {
      return this._value === other._value && this.width() === other.width()
    }
    
    return _.isEqual(this.asBitArray(), other.asBitArray());
  }
  
}

export class BitsetDataValue implements DataValue {
  protected _width: number
  protected _value: boolean[]
  
  constructor(width: number, value?: readonly boolean[]) {
    this._width = width
    this._value = value?.slice(0, width) || BinaryUtil.zeroArray(width)
  }
  
  asBitArray(): ReadonlyArray<boolean> {
    return this._value
  }
  
  asNumber(): number {
    if (this._width > 32)
      throw new Error('Cannot get value as number. Width is too long.')
    
    return BinaryUtil.toNumber(this._value)
  }
  
  width(): number {
    return this._width
  }
  
  equals(other: DataValue): boolean {
    return _.isEqual(this.asBitArray(), other.asBitArray());
  }
}

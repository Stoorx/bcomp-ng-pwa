import {DataValue, ZeroDataValue} from '@/service/bcomp-ng/util/DataValue'
import Observer from '@/service/bcomp-ng/util/Observer'
import EmittingPublisher from '@/service/bcomp-ng/util/EmittingPublisher'
import DataPublisher from '@/service/bcomp-ng/util/DataPublisher'
import BasicElement from '@/service/bcomp-ng/elements/BasicElement'

export default class Valve implements BasicElement, Observer<boolean> {
  private readonly _source: BasicElement
  private _isOpen: boolean
  private readonly _zero: ZeroDataValue
  private readonly _width: number // TODO: get width from source somehow
  
  constructor(source: BasicElement, width: number, isOpen?: boolean) {
    this._source = source
    this._isOpen = isOpen && isOpen || false
    this._width = width
    this._zero = new ZeroDataValue(width)
  }
  
  // Publishers
  protected _valuePublisher: EmittingPublisher<DataValue> = new EmittingPublisher()
  
  public get valuePublisher(): DataPublisher<DataValue> {
    return this._valuePublisher
  }
  
  protected _isOpenPublisher: EmittingPublisher<boolean> = new EmittingPublisher()
  
  public get isOpenPublisher(): DataPublisher<boolean> {
    return this._isOpenPublisher
  }
  
  getValue(): DataValue {
    return this._isOpen ? this._source.getValue() : this._zero
  }
  
  width(): number {
    return this._width
  }
  
  public setState(open: boolean) {
    if (this._isOpen != open) {
      this._isOpen = open
      this.notifyListeners()
    }
  }
  
  public getState(): boolean {
    return this._isOpen
  }
  
  // Observer
  notify(data: boolean): void {
    this.setState(data)
  }
  
  protected notifyListeners() {
    this._valuePublisher.emit(this.getValue())
    this._isOpenPublisher.emit(this.getState())
  }
}

import Observer from '@/service/bcomp-ng/util/Observer'
import {DataValue} from '@/service/bcomp-ng/util/DataValue'
import BasicElement from '@/service/bcomp-ng/elements/BasicElement'
import EmittingPublisher from '@/service/bcomp-ng/util/EmittingPublisher'

export default class ValveStatePublisher extends EmittingPublisher<boolean> implements Observer<DataValue> {
  private _source: BasicElement
  private readonly _valveBit: number
  
  constructor(source: BasicElement, valveBit: number) {
    super();
    this._source = source
    this._valveBit = valveBit
  }
  
  notify(data: DataValue): void {
    const value = data.asBitArray()[this._valveBit]
    this.emit(value)
  }
}

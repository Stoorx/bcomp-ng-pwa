import {DataValue, NumericDataValue} from '@/service/bcomp-ng/util/DataValue'
import BasicBus from '@/service/bcomp-ng/elements/BasicBus'

export default class NumericBus extends BasicBus {
  constructor(width: number) {
    super(width);
  }
  
  getValue(): DataValue {
    let value = 0
    this._sources.forEach(
      source => value |= source.getValue().asNumber()
    )
    
    return new NumericDataValue(this._width, value);
  }
}

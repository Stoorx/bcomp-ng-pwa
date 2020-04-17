import BasicElement from '@/service/bcomp-ng/elements/BasicElement'
import {DataValue} from '@/service/bcomp-ng/util/DataValue'

export default abstract class BasicBus implements BasicElement {
  protected _sources: BasicElement[] = []
  protected _width: number
  
  protected constructor(width: number) {
    this._width = width
  }
  
  addSource(source: BasicElement): this {
    this._sources.push(source)
    return this
  }
  
  abstract getValue(): DataValue
}


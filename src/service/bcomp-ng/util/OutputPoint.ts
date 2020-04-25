import InputPoint from '@/service/bcomp-ng/util/InputPoint'
import {Circuit} from '@/service/bcomp-ng/util/Circuit'

export default class OutputPoint<T> {
  private readonly _getValueFn: () => T
  private readonly _scheme: Circuit
  private readonly _subscribers: InputPoint<T>[] = []
  
  constructor(parent: Circuit, getValueFn: () => T) {
    this._scheme = parent
    this._getValueFn = getValueFn
  }
  
  public get scheme(): Circuit {
    return this._scheme
  }
  
  public get value(): T {
    return this._getValueFn()
  }
  
  public get subscribers(): readonly InputPoint<T>[] {
    return this._subscribers
  }
  
  public connect(subscriber: InputPoint<T>) {
    this._subscribers.push(subscriber)
  }
}

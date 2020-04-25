import OutputPoint from '@/service/bcomp-ng/util/OutputPoint'
import {Circuit} from '@/service/bcomp-ng/util/Circuit'

export default class InputPoint<T> {
  private _unconnectedValueFn: () => T
  private _source: OutputPoint<T> | null = null
  
  constructor(scheme: Circuit, unconnectedValue: () => T, source?: OutputPoint<T>) {
    this._scheme = scheme
    this._unconnectedValueFn = unconnectedValue
    this._source = source || null
  }
  
  public get value(): T {
    const val = this._source?.value
    if (val)
      return val
    else
      return this._unconnectedValueFn()
  }
  
  private _scheme: Circuit
  
  public get scheme(): Circuit {
    return this._scheme
  }
  
  public bindSource(source: OutputPoint<T>) {
    if (this._source == null) {
      this._source = source
      this._source.connect(this)
    }
    else
      throw new Error('Attempt to rebind source')
  }
}

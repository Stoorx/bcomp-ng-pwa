import {Circuit} from '@/service/bcomp-ng/util/Circuit'
import InputPoint from '@/service/bcomp-ng/util/InputPoint'
import OutputPoint from '@/service/bcomp-ng/util/OutputPoint'

export default abstract class BasicElement implements Circuit {
  protected constructor(name: string) {
    this._name = name
  }
  
  protected _name: string
  
  public get name() {
    return this._name
  }
  
  abstract getInputs(): readonly InputPoint<any>[]
  
  abstract getOutputs(): readonly OutputPoint<any>[]
  
  abstract update(): readonly InputPoint<any>[]
}

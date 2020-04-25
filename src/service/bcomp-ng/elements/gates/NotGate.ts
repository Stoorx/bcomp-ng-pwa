import {Circuit} from '@/service/bcomp-ng/util/Circuit'
import InputPoint from '@/service/bcomp-ng/util/InputPoint'
import OutputPoint from '@/service/bcomp-ng/util/OutputPoint'

export class NotGate implements Circuit {
  public input = new InputPoint<boolean>(this, () => false)
  private _state: boolean = false
  public output = new OutputPoint<boolean>(this, () => this._state)
  
  update(): readonly InputPoint<any>[] {
    const newState = !this.input.value
    if (newState !== this._state) {
      this._state = newState
      return this.output.subscribers
    }
    else
      return []
  }
  
  getInputs(): InputPoint<any>[] {
    return [this.input];
  }
  
  getOutputs(): OutputPoint<any>[] {
    return [this.output];
  }
  
  public bindInput(outputPoint: OutputPoint<boolean>): this {
    this.input.bindSource(outputPoint)
    this._state = !this.input.value
    return this
  }
}

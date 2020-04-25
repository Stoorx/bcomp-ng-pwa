import InputPoint from '@/service/bcomp-ng/util/InputPoint'
import OutputPoint from '@/service/bcomp-ng/util/OutputPoint'

export interface Circuit {
  update(): readonly InputPoint<any>[];
  
  getInputs(): readonly InputPoint<any>[];
  
  getOutputs(): readonly OutputPoint<any>[];
  
}

export class ButtonGate implements Circuit {
  constructor(state?: boolean) {
    this._state = state || false
  }
  
  private _state: boolean
  
  public set state(value: boolean) {
    this._state = value
  }
  
  public output: OutputPoint<boolean> = new OutputPoint(this, () => this._state)
  
  forceUpdate(): readonly InputPoint<any>[] {
    return this.output.subscribers
  }
  
  update(): readonly InputPoint<any>[] {
    return this.forceUpdate()
  }
  
  getInputs(): readonly InputPoint<any>[] {
    return []
  }
  
  getOutputs(): readonly OutputPoint<any>[] {
    return [this.output]
  }
}

export class PrintGate implements Circuit {
  public input: InputPoint<boolean> = new InputPoint(this, () => false)
  
  getInputs(): readonly InputPoint<any>[] {
    return [this.input]
  }
  
  getOutputs(): readonly OutputPoint<any>[] {
    return []
  }
  
  update(): readonly InputPoint<any>[] {
    console.log(this.input.value)
    return []
  }
}

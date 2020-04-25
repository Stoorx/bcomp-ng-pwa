import InputPoint from '@/service/bcomp-ng/util/InputPoint'
import OutputPoint from '@/service/bcomp-ng/util/OutputPoint'
import BasicElement from '@/service/bcomp-ng/elements/BasicElement'

export default abstract class AbstractGate2 extends BasicElement {
  public inputA = new InputPoint<boolean>(this, () => false)
  public inputB = new InputPoint<boolean>(this, () => false)
  protected _state: boolean = false
  public output = new OutputPoint<boolean>(this, () => this._state)
  
  protected constructor(name: string) {
    super(name)
  }
  
  public bindInputA(source: OutputPoint<boolean>): this {
    this.inputA.bindSource(source)
    return this
  }
  
  public bindInputB(source: OutputPoint<boolean>): this {
    this.inputB.bindSource(source)
    return this
  }
  
  public getInputs(): readonly InputPoint<any>[] {
    return [this.inputA, this.inputB];
  }
  
  public getOutputs(): readonly OutputPoint<any>[] {
    return [this.output];
  }
  
  public update(): readonly InputPoint<any>[] {
    const newState = this.compute()
    if (newState !== this._state) {
      this._state = newState
      return this.output.subscribers
    }
    else
      return []
  }
  
  protected abstract compute(): boolean
}

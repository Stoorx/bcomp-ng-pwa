import InputPoint from '@/service/bcomp-ng/util/InputPoint'
import OutputPoint from '@/service/bcomp-ng/util/OutputPoint'
import BasicElement from '@/service/bcomp-ng/elements/BasicElement'

export default class HalfAdder extends BasicElement {
  public inputA = new InputPoint<boolean>(this, () => false)
  public inputB = new InputPoint<boolean>(this, () => false)
  private _stateS: boolean = false
  public outputS = new OutputPoint<boolean>(this, () => this._stateS)
  private _stateC: boolean = false
  public outputC = new OutputPoint<boolean>(this, () => this._stateC)
  
  constructor() {
    super('Half adder');
  }
  
  update(): readonly InputPoint<any>[] {
    const notifyPoints: InputPoint<any>[] = []
    
    const newC = this.inputA.value && this.inputB.value // AND
    if (newC !== this._stateC) notifyPoints.push(...this.outputC.subscribers)
    const newS = this.inputA.value !== this.inputB.value // XOR
    if (newS !== this._stateS) notifyPoints.push(...this.outputS.subscribers)
    
    return notifyPoints;
  }
  
  getInputs(): readonly InputPoint<any>[] {
    return [this.inputA, this.inputB];
  }
  
  getOutputs(): readonly OutputPoint<any>[] {
    return [this.outputS, this.outputC];
  }
}

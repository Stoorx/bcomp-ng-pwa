import BasicElement from '@/service/bcomp-ng/elements/BasicElement'
import InputPoint from '@/service/bcomp-ng/util/InputPoint'
import OutputPoint from '@/service/bcomp-ng/util/OutputPoint'

export class Valve<T> extends BasicElement {
  constructor() {
    super('Valve');
  }
  
  getInputs(): readonly InputPoint<any>[] {
    return [];
  }
  
  getOutputs(): readonly OutputPoint<any>[] {
    return [];
  }
  
  update(): readonly InputPoint<any>[] {
    return [];
  }
  
  
}

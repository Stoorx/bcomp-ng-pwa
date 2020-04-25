import AbstractGate2 from '@/service/bcomp-ng/elements/gates/AbstractGate2'

export class AndGate extends AbstractGate2 {
  constructor() {
    super('AND');
  }
  
  compute(): boolean {
    return this.inputA.value && this.inputB.value;
  }
}

export class OrGate extends AbstractGate2 {
  constructor() {
    super('OR');
  }
  
  protected compute(): boolean {
    return this.inputA.value || this.inputB.value;
  }
}

export class NandGate extends AbstractGate2 {
  constructor() {
    super('NAND');
  }
  
  protected compute(): boolean {
    return !(this.inputA.value && this.inputB.value);
  }
}

export class NorGate extends AbstractGate2 {
  constructor() {
    super('NOR');
  }
  
  protected compute(): boolean {
    return !(this.inputA.value || this.inputB.value);
  }
}

export class XorGate extends AbstractGate2 {
  constructor() {
    super('XOR');
  }
  
  protected compute(): boolean {
    return this.inputA.value !== this.inputB.value;
  }
}

import ProgramStateRegister from '@/service/bcomp-ng/ProgramStateRegister'
import NumericRegister from './elements/NumericRegister'
import Valve from '@/service/bcomp-ng/elements/Valve'
import BasicBus from '@/service/bcomp-ng/elements/BasicBus'
import NumericBus from '@/service/bcomp-ng/elements/NumericBus'

export enum Registers {
  Accumulator,
  BufferRegister,
  ProgramState,
  DataRegister,
  CommandRegister,
  InstructionPointer,
  StackPointer,
  AddressRegister
}

export default class Cpu {
  // Left ALU input
  public accumulator = new NumericRegister(16)
  public wracValve: Valve = new Valve(this.accumulator, 16)
  public rdacValve: Valve = new Valve(this.accumulator, 16)
  
  public bufferRegister = new NumericRegister(16)
  public wrbrValve: Valve = new Valve(this.accumulator, 16)
  public rdbrValve: Valve = new Valve(this.accumulator, 16)
  
  public programState = new ProgramStateRegister()
  public wrpsValve: Valve = new Valve(this.accumulator, 16)
  public rdpsValve: Valve = new Valve(this.accumulator, 16)
  
  public inputRegister = new NumericRegister(16) // TODO: make input register class
  public rdirValve: Valve = new Valve(this.accumulator, 16)
  
  public leftBus: BasicBus =
    new NumericBus(16)
      .addSource(this.rdacValve)
      .addSource(this.rdbrValve)
      .addSource(this.rdpsValve)
      .addSource(this.rdirValve)
  
  // Right ALU input
  public dataRegister = new NumericRegister(16)
  public wrdrValve: Valve = new Valve(this.accumulator, 16)
  public rddrValve: Valve = new Valve(this.accumulator, 16)
  
  public commandRegister = new NumericRegister(16)
  public wrcrValve: Valve = new Valve(this.accumulator, 16)
  public rdcrValve: Valve = new Valve(this.accumulator, 16)
  
  public instructionPointer = new NumericRegister(16)
  public wripValve: Valve = new Valve(this.accumulator, 16)
  public rdipValve: Valve = new Valve(this.accumulator, 16)
  
  public stackPointer = new NumericRegister(16)
  public wrspValve: Valve = new Valve(this.accumulator, 16)
  public rdspValve: Valve = new Valve(this.accumulator, 16)
  
  public rightBus: BasicBus =
    new NumericBus(16)
      .addSource(this.rddrValve)
      .addSource(this.rdcrValve)
      .addSource(this.rdipValve)
      .addSource(this.rdspValve)
  
  // Memory
  public addressRegister = new NumericRegister(16)
  public wrarValve: Valve = new Valve(this.accumulator, 16)
  
  constructor() {
  
  }
  
  public tickRaise() {
  
  }
  
  public tickFall() {
  
  }
}

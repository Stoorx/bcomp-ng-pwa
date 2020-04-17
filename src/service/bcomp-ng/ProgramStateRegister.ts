import NumericRegister from '@/service/bcomp-ng/elements/NumericRegister'

export enum Flags {
  Carry = 0,
  Overflow = 1,
  Zero = 2,
  Negative = 3,
  Trace = 7,
  Interrupt = 8,
  PrivilegeLevel = 9,
  PrivilegeControl = 14,
  PagingEnabled = 15
}

export interface ProgramStateRegisterParams {
  carryFlag?: boolean,
  overflowFlag?: boolean,
  zeroFlag?: boolean,
  negativeFlag?: boolean,
  traceFlag?: boolean,
  interruptFlag?: boolean,
  privilegeLevelFlag?: boolean,
  privilegeControlFlag?: boolean,
  pagingEnabledFlag?: boolean
}

export default class ProgramStateRegister extends NumericRegister {
  constructor(params?: ProgramStateRegisterParams) {
    super(16);
    if (params) {
      this.carryFlag = params.carryFlag || false
      this.overflowFlag = params.overflowFlag || false
      this.zeroFlag = params.zeroFlag || false
      this.negativeFlag = params.negativeFlag || false
      this.traceFlag = params.traceFlag || false
      this.interruptFlag = params.interruptFlag || false
      this.privilegeLevelFlag = params.privilegeLevelFlag || false
      this.privilegeControlFlag = params.privilegeControlFlag || false
      this.pagingEnabledFlag = params.pagingEnabledFlag || false
    }
  }
  
  public get carryFlag(): boolean {
    return this.getBit(Flags.Carry)
  }
  
  public set carryFlag(value: boolean) {
    this.setBit(Flags.Carry, value)
  }
  
  public get overflowFlag(): boolean {
    return this.getBit(Flags.Overflow)
  }
  
  public set overflowFlag(value: boolean) {
    this.setBit(Flags.Overflow, value)
  }
  
  public get zeroFlag(): boolean {
    return this.getBit(Flags.Zero)
  }
  
  public set zeroFlag(value: boolean) {
    this.setBit(Flags.Zero, value)
  }
  
  public get negativeFlag(): boolean {
    return this.getBit(Flags.Negative)
  }
  
  public set negativeFlag(value: boolean) {
    this.setBit(Flags.Negative, value)
  }
  
  public get traceFlag(): boolean {
    return this.getBit(Flags.Trace)
  }
  
  public set traceFlag(value: boolean) {
    this.setBit(Flags.Trace, value)
  }
  
  public get interruptFlag(): boolean {
    return this.getBit(Flags.Interrupt)
  }
  
  public set interruptFlag(value: boolean) {
    this.setBit(Flags.Interrupt, value)
  }
  
  public get privilegeLevelFlag(): boolean {
    return this.getBit(Flags.PrivilegeLevel)
  }
  
  public set privilegeLevelFlag(value: boolean) {
    this.setBit(Flags.PrivilegeLevel, value)
  }
  
  public get privilegeControlFlag(): boolean {
    return this.getBit(Flags.PrivilegeControl)
  }
  
  public set privilegeControlFlag(value: boolean) {
    this.setBit(Flags.PrivilegeControl, value)
  }
  
  public get pagingEnabledFlag(): boolean {
    return this.getBit(Flags.PagingEnabled)
  }
  
  public set pagingEnabledFlag(value: boolean) {
    this.setBit(Flags.PagingEnabled, value)
  }
}

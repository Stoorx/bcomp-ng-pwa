import EmittingPublisher from '@/service/bcomp-ng/util/EmittingPublisher'
import DataPublisher from '@/service/bcomp-ng/util/DataPublisher'
import NumericRegister from '@/service/bcomp-ng/elements/NumericRegister'
import Valve from '@/service/bcomp-ng/elements/Valve'
import BitSetRegister from '@/service/bcomp-ng/elements/BitSetRegister'
import MutableRegister from '@/service/bcomp-ng/elements/Register'
import {BitsetDataValue} from '@/service/bcomp-ng/util/DataValue'

export default class ControlUnit {
  // Control unit blocks
  public microcommandRegister: MutableRegister
  public microcommandCounterRegister: MutableRegister
  
  public operationalCommandValve: Valve
  public controlCommandValve: Valve
  
  public microcommandMemory: BitsetDataValue[]
  
  // Register valves publishers
  
  constructor() {
    this.microcommandMemory = Array.from({length: 1024}).map(() => new BitsetDataValue(48))
    this.microcommandCounterRegister = new NumericRegister(10)
    
    this.microcommandRegister = new BitSetRegister(48)
    this.operationalCommandValve = new Valve(this.microcommandRegister, this.microcommandRegister.width())
    this.controlCommandValve = new Valve(this.microcommandRegister, this.microcommandRegister.width())
    
    // TODO: initialize publishers
  }
  
  // Accumulator register
  protected _wracPublisher: EmittingPublisher<boolean>
  
  public get wracPublisher(): DataPublisher<boolean> {
    return this._wracPublisher
  }
  
  protected _rdacPublisher: EmittingPublisher<boolean>
  
  public get rdacPublisher(): DataPublisher<boolean> {
    return this._rdacPublisher
  }
  
  // Buffer register
  protected _wrbrPublisher: EmittingPublisher<boolean>
  
  public get wrbrPublisher(): DataPublisher<boolean> {
    return this._wrbrPublisher
  }
  
  protected _rdbrPublisher: EmittingPublisher<boolean>
  
  public get rdbrPublisher(): DataPublisher<boolean> {
    return this._rdbrPublisher
  }
  
  // Program state register
  protected _wrpsPublisher: EmittingPublisher<boolean>
  
  public get wrpsPublisher(): DataPublisher<boolean> {
    return this._wrpsPublisher
  }
  
  protected _rdpsPublisher: EmittingPublisher<boolean>
  
  public get rdpsPublisher(): DataPublisher<boolean> {
    return this._rdpsPublisher
  }
  
  // Input register
  protected _rdirPublisher: EmittingPublisher<boolean>
  
  public get rdirPublisher(): DataPublisher<boolean> {
    return this._rdirPublisher
  }
  
}

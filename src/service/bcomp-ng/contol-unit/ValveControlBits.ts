export enum ValveControlBits {
  /**
   * Read Data Register
   */
  RDDR = 0,
  
  /**
   * Read Command Register
   */
  RDCR = 1,
  
  /**
   * Read Instruction Pointer
   */
  RDIP = 2,
  
  /**
   * Read Stack Pointer
   */
  RDSP = 3,
  
  /**
   * Read Accumulator
   */
  RDAC = 4,
  
  /**
   * Read Buffer Register
   */
  RDBR = 5,
  
  /**
   * Read Program State register
   */
  RDPS = 6,
  
  /**
   * Read Input Register
   */
  RDIR = 7,
  
  /**
   * Complement Right input
   */
  COMR = 8,
  
  /**
   * Complement Left input
   */
  COML = 9,
  
  /**
   * Plus one
   */
  PLS1 = 10,
  
  /**
   * Summary OR And
   */
  SORA = 11,
  
  /**
   * Lower byte to lower
   */
  LTOL = 12,
  
  /**
   * Lower byte to high
   */
  LTOH = 13,
  
  /**
   * High byte to lower
   */
  HTOL = 14,
  
  /**
   * High byte to high
   */
  HTOH = 15,
  
  /**
   * Sign Extend from lower byte to high
   */
  SEXT = 16,
  
  /**
   * Shift Left
   */
  SHLT = 17,
  
  /**
   * Use old C as value for 0th bit (SH_L + SHL0 == ROL)
   */
  SHL0 = 18,
  
  /**
   * Shift Right
   */
  SHRT = 19,
  
  /**
   * ???
   */
  SHRF = 20,
  
  /**
   * Set flag C
   */
  SETC = 21,
  
  /**
   * Set flag oVerflow
   */
  SETV = 22,
  
  /**
   * Set flags N and Z
   */
  STNZ = 23,
  
  /**
   * Write to Data Register
   */
  WRDR = 24,
  
  /**
   * Write to Command Register
   */
  WRCR = 25,
  
  /**
   * Write to Instruction Pointer
   */
  WRIP = 26,
  
  /**
   * Write to Stack Pointer
   */
  WRSP = 27,
  
  /**
   * Write to Accumulator
   */
  WRAC = 28,
  
  /**
   * Write to Buffer Register
   */
  WRBR = 29,
  
  /**
   * Write to Program State register
   */
  WRPS = 30,
  
  /**
   * Write to Address Register
   */
  WRAR = 31,
  
  /**
   * Load value from Memory to Data Register
   */
  LOAD = 32,
  
  /**
   * Store value from Data Register to Memory
   */
  STOR = 33,
  
  /**
   * Input output
   */
  IO = 34,
  
  /**
   *
   */
  IRQS = 35,
  
  /**
   * Reserved
   */
  RESERVED36 = 36,
  
  /**
   * Reserved
   */
  RESERVED37 = 37,
  
  /**
   * HALT
   */
  HALT = 38,
  
  /**
   * Micro command type
   */
  TYPE = 39
}

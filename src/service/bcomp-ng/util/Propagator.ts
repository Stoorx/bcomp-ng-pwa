import {Circuit} from '@/service/bcomp-ng/util/Circuit'
import _ from 'lodash'

export class Propagator {
  // Stats
  public iterationsCount = 0;
  private _plannedToUpdate: Circuit[] = []
  
  propagate() {
    while (this._plannedToUpdate.length != 0) {
      this.iterationsCount++
      const current = this._plannedToUpdate.shift()
      const pointsList = current!.update()
      this._plannedToUpdate.push(...pointsList.map(v => v.scheme))
      this._plannedToUpdate = _.uniq(this._plannedToUpdate)
    }
  }
  
  addPlanned(...circuit: Circuit[]): this {
    this._plannedToUpdate.push(...circuit)
    return this
  }
}

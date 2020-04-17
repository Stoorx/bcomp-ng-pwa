import Observer from '@/service/bcomp-ng/util/Observer'
import Observable from '@/service/bcomp-ng/util/Observable'
import * as _ from 'lodash'

export default abstract class DataPublisher<T> implements Observable<T> {
  protected _observers: Observer<T>[] = []
  
  subscribe(observer: Observer<T>): this {
    if (!this._observers.includes(observer)) {
      this._observers.push(observer)
    }
    return this
  }
  
  unsubscribe(observer: Observer<T>): void {
    _.pull(this._observers, observer)
  }
}


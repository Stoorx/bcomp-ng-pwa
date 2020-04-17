import Observer from '@/service/bcomp-ng/util/Observer'

export default interface Observable<T> {
  subscribe(observer: Observer<T>): this
  
  unsubscribe(observer: Observer<T>): void
}

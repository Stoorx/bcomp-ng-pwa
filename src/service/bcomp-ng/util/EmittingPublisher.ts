import DataPublisher from '@/service/bcomp-ng/util/DataPublisher'

export default class EmittingPublisher<T> extends DataPublisher<T> {
  public emit(data: T) {
    this._observers.forEach(
      observer => observer.notify(data)
    )
  }
}

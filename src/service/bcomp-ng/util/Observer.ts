export default interface Observer<T> {
  notify(data: T): void
}

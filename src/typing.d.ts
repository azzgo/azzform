declare interface ChangeEvent<T = HTMLInputElement> {
  target: T;
}

declare interface Newable<T = any> {
  new (): T;
}

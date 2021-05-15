declare interface ChangeEvent<T = HTMLInputElement> {
  target: T;
}

declare module '*.vue' {
  import { Component } from 'vue'
  const component: Component
  export default component
}

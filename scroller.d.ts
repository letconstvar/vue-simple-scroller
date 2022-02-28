// import type { ExtractPropTypes } from 'vue'
import { DefineComponent, Plugin } from 'vue';

// interface IProps {
//   height?: string,
//   loading?: boolean,
//   isEnd?: boolean,
//   isTop?: boolean
// }

declare const ScrollerProps: 
  DefineComponent & 
  { install: Exclude<Plugin['install'], undefined> };
export default ScrollerProps;
import type { ExtractPropTypes } from 'vue'
import IProps from "./packages/scroller/types";
// import { DefineComponent, Plugin } from 'vue';

// interface IProps {
//   height?: string,
//   loading?: boolean,
//   isEnd?: boolean,
//   isTop?: boolean
// }

// declare const ScrollerProps:
//   DefineComponent &
//   { install: Exclude<Plugin['install'], undefined> };
// export default ScrollerProps;


declare const ScrollerProps: Partial<ExtractPropTypes<typeof IProps>>;
export default ScrollerProps;
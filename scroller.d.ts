import type { ExtractPropTypes, DefineComponent, Plugin } from 'vue'
import IProps from "./packages/scroller/types";

declare const ScrollerProps: DefineComponent<Partial<ExtractPropTypes<typeof IProps>>> 
  & { install: Exclude<Plugin['install'], undefined> };
export default ScrollerProps;
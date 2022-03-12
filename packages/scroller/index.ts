// @ts-ignore
import Scroller from './index.vue';
import { App } from 'vue';

Scroller.install = function (Vue: App) {
  Vue.component('vue-simple-scroller', Scroller);
}

export default Scroller;
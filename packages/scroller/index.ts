// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
import Scroller from './index.vue'

Scroller.install = function (Vue: any) {
  Vue.component('vue-simple-scroller', Scroller);
}

export default Scroller
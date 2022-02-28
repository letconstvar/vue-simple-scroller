import Scroller from './scroller/index';

const components = [Scroller];

const install = (Vue: any) => {
  components.forEach(component => {
    Vue.component('vue-simple-scroller', component)
  });
}

export default {
  install,
  Scroller // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
}
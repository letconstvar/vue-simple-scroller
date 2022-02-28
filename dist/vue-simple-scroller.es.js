import { defineComponent, ref, onMounted, onUnmounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, renderSlot, createCommentVNode } from "vue";
var index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    height: { default: "100%" },
    loading: { type: Boolean, default: false },
    isEnd: { type: Boolean, default: false },
    isTop: { type: Boolean, default: false }
  },
  emits: ["onEnd"],
  setup(__props, { emit }) {
    const props = __props;
    const ListRef = ref();
    const InnerRef = ref();
    const listHeight = ref(0);
    const innerHeight = ref(0);
    const initScroll = (e) => {
      if (props.loading || props.isEnd)
        return;
      innerHeight.value = InnerRef.value.offsetHeight;
      const scrollTop = e.target.scrollTop;
      if (scrollTop + listHeight.value >= innerHeight.value) {
        emit("onEnd");
      }
    };
    onMounted(() => {
      listHeight.value = ListRef.value.clientHeight;
      innerHeight.value = InnerRef.value.offsetHeight;
      ListRef.value.addEventListener("scroll", initScroll);
    });
    onUnmounted(() => {
      ListRef.value.removeEventListener("scroll", initScroll);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "scroll__list",
        ref_key: "ListRef",
        ref: ListRef,
        style: normalizeStyle({ height: __props.height })
      }, [
        createElementVNode("div", {
          class: "inner",
          ref_key: "InnerRef",
          ref: InnerRef
        }, [
          __props.isTop ? renderSlot(_ctx.$slots, "isTop", { key: 0 }) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default"),
          __props.loading ? renderSlot(_ctx.$slots, "loading", { key: 1 }) : createCommentVNode("", true),
          __props.isEnd ? renderSlot(_ctx.$slots, "isEnd", { key: 2 }) : createCommentVNode("", true)
        ], 512)
      ], 4);
    };
  }
});
_sfc_main.install = function(Vue) {
  Vue.component("vue-simple-scroller", _sfc_main);
};
const components = [_sfc_main];
const install = (Vue) => {
  components.forEach((component) => {
    Vue.component("vue-simple-scroller", component);
  });
};
var index = {
  install,
  Scroller: _sfc_main
};
export { index as default };

<script lang='ts'>
export default {
  inheritAttrs: false,
  props: {},
  setup(props: any, context: any) {
    const {size, ...rest} = props
    return {}
  }
}
</script>

<template>
  <div :size="size">
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<style lang='scss' scoped>
div {
  border: 1px solid red;
}
</style>
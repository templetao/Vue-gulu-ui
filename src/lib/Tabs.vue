<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div class="gulu-tabs-nav-item" v-for="(t,index) in titles"
           :ref="el => {if(el) navItems[index] =el}" :key="index"
           @click="select(t)" :class="{selected: t === selected}">{{ t }}</div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed, onMounted, onUpdated, ref} from 'vue'

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props: any, context: any) {
    const navItems = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>()
    const container = ref<HTMLDivElement>()
    const x = () => {
      const divs = navItems.value
      const result = divs.filter(div => div.classList.contains('selected'))[0]
      const {width} = result.getBoundingClientRect()
      indicator.value!.style.width = width + 'px'
      const {left: left1} = container.value!.getBoundingClientRect()
      const {left: left2} = result.getBoundingClientRect()
      const left = left2 - left1
      indicator.value!.style.left = left + 'px'
    }
    onMounted(x)
    onUpdated(x)

    const defaults = context.slots.default()
    defaults.forEach((tag: any) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return defaults.find((tag: any) => tag.props.title === props.selected)
    })
    const titles = defaults.map((tag: any) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      defaults, titles, current, select, navItems, indicator, container
    }
  }
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
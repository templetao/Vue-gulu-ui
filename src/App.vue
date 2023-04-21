<script lang="ts">
import {provide, ref} from 'vue'

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500)
    provide('menuVisible', menuVisible) //set
  }
}
</script>

<template>
  <router-view/>
</template>

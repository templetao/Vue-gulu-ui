<script lang="ts">
import {provide, ref} from 'vue'

export default {
  name: 'App',
  setup(){
    const menuVisible = ref(false)
    provide('menuVisible', menuVisible) //set
  }
}
</script>

<template>
  <router-view/>
</template>

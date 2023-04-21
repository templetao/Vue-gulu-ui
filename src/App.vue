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
  <div>hi</div>
  <router-link to="/">tao</router-link>
  |
  <router-link to="/doc">tao2</router-link>
  <hr/>
  <router-view/>
</template>

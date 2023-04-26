<script setup lang="ts">
import Topnav from '../components/Topnav.vue'
</script>

<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>轮子UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://Github.com">Github</a>
        <RouterLink to="/doc">开始</RouterLink>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 8px;
$color: #008080;

.topnavAndBanner {
  background: linear-gradient(145deg, rgba(174,238,190,1) 0%, rgba(148,187,233,1) 100%);
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

<script lang='ts'>
export default {
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<template>
  <button class="gulu-button" :class="{[`gulu-theme-${theme}`]: theme}">
    <slot/>
  </button>
</template>

<style lang='scss'>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$green: #50C878;
$radius: 10px;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:focus {
    color: $green;
    border-color: $green;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &.gulu-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $green;
    &:hover,&:focus {
      color: lighten($green, 10%);
    }
  }
  &.gulu-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white, 10%);;
    }
  }
}
</style>
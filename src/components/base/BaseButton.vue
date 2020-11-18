<template>
  <button class="btn" :class="classname">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    classname: {
      type: String,
      default: ""
    }
  }
};
</script>

<template>
  <span class="icon-svg" :class="classname">
    <svg role="img" xmlns="http://www.w3.org/2000/svg" :viewBox="viewbox">
      <path fill="currentColor" :d="d"></path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    classname: {
      type: String,
      default: ""
    },
    d: {
      type: String,
      default: ""
    },
    viewbox: {
      type: String,
      default: "0 0 448 512"
    }
  }
};
</script>

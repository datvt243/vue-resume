<template>
  <BaseIcon
    :classname="classname"
    d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
  />
</template>

<script>
import BaseIcon from "@/components/icon/BaseIcon.vue";
export default {
  name: "IconBars",
  components: {
    BaseIcon
  },
  props: {
    classname: {
      type: String,
      default: ""
    }
  }
};
</script>

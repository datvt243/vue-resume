<template lang="pug">
  .modal
    .inner
      .header
        span.icon.trans(@click="$emit('close')")
          BaseIconClose
        slot(name='header')
      .main
        slot(name='main')
    .over(@click="$emit('close')")

</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.showModal = this.show;
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style lang="sass" scoped>
.modal
  position: fixed
  top: 0
  left: 0
  z-index: 9999
  width: 100%
  height: 100%
  background-color: rgba(0,0,0,.6)
  .inner
    position: absolute
    z-index: 10
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background-color: #fff
    padding: 15px 15px 20px
    box-shadow: 4px 4px 0px rgba(255,255,255,.4)
    max-height: 95vh
  .over
    position: absolute
    z-index: 1
    top: 0
    left: 0
    width: 100%
    height: 100%
  .header
    position: relative
    padding: 5px 0
    border-bottom: 1px solid #eeeeee
    margin-bottom: 20px
  .title
    color: #000
    font:
      size: 20px
      weight: 700
    text-transform: uppercase
  .icon
    cursor: pointer
    position: absolute
    z-index: 10
    top: 50%
    right: 0
    transform: translateY(-50%)
    color: #000
  @media (max-width: 576px)
    .inner
      width: 90%
</style>

<template lang="pug">
  .portfolio
    .portfolio-card
      a.portfolio-link(href='#' @click.prevent='showModal = !showModal')
        p.portfolio-heading {{ heading }}
        .portfolio-image
          img(:src='img' :alt='heading')
    transition(name='dropdown')
      Modal(v-if='showModal' @close='showModal = false')
        p.title(slot='header')
          | {{ heading }}
        div(slot='main')
          img.w-full.image(:src='img' :alt='heading')

</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "PortfolioItem",
  props: {
    img: {
      type: String,
      default: "http://placehold.jp/600x800.png"
    },
    heading: {
      type: String,
      default: "Template"
    }
  },
  components: {
    Modal
  },
  data() {
    return {
      showModal: false
    };
  }
};
</script>

<style lang="sass" scoped>
.image
  border: 1px solid #d0d8e5
</style>

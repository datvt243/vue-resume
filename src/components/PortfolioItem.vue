<template>
  <div class="portfolio">
    <div class="portfolio-card">
      <a
        href="#"
        class="portfolio-link"
        @click.prevent="showModal = !showModal"
      >
        <p class="portfolio-heading">{{ heading }}</p>
        <div class="portfolio-image">
          <img :src="img" :alt="heading" />
        </div>
      </a>
    </div>
    <transition name="dropdown">
      <Modal v-if="showModal" @close="showModal = false">
        <p class="title" slot="header">
          {{ heading }}
        </p>
        <div slot="main">
          <img :src="img" :alt="heading" class="w-full image" />
        </div>
      </Modal>
    </transition>
  </div>
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

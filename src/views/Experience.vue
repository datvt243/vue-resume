<template lang="pug">
  .experience
    h2.heading-primary
      | Kinh Nghiệm Làm Việc
    ul.timeline-list
      li(v-for='(item, index) in getExperience' :key='index')
        ExperienceItem(:experience='item')
</template>

<script>
import { mapGetters } from "vuex";
import ExperienceItem from "@/components/ExperienceItem.vue";
export default {
  name: "Experience",
  components: {
    ExperienceItem
  },
  computed: {
    ...mapGetters(["getExperience"])
  }
};
</script>

<style lang="sass" scoped>
.heading-primary
  margin-bottom: 40px
.text-inner
  margin-bottom: 10px
@media (max-width: 576px)
  .heading-primary
    font-size: 22px
    margin-bottom: 30px
</style>

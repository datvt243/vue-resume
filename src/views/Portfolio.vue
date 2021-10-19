<template lang="pug">
  .about
    h2.heading-primary
      | Portfolio
    .clearfix
      ul.row.margin
        li.col-6.col-sm-12.col-md-6(v-for='(item, index) in getPortfolioFreelancer' :key='index')
          PortfolioItem(:heading='item.heading' :img='item.img')
      hr.hr
      ul.row.margin
        li.col-6.col-sm-12.col-md-6(v-for='(item, index) in getPortfolioVietry' :key='index')
          PortfolioItem(:heading='item.heading' :img='item.img')
      hr.hr
      ul.row.margin
        li.col-6.col-sm-12.col-md-6(v-for='(item, index) in getPortfolioFastcoding' :key='index')
          PortfolioItem(:heading='item.heading' :img='item.img')

</template>

<script>
import { mapGetters } from "vuex";
import PortfolioItem from "@/components/PortfolioItem.vue";
export default {
  name: "Portfolio",
  components: {
    PortfolioItem
  },
  computed: {
    ...mapGetters([
      "getPortfolioFreelancer",
      "getPortfolioVietry",
      "getPortfolioFastcoding"
    ])
  }
};
</script>

<style lang="sass" scoped>
hr
  margin: 0 0 30px 0
@media (max-width: 576px)
  .row
    $val: 10
    margin:
      left: -#{$val}px
      right: -#{$val}px
    > *
      padding:
        left: #{$val}px
        right: #{$val}px
      margin-bottom: #{$val*2}px
  hr
    margin: 0 0 20px 0
</style>

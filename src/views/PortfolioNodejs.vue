<template lang="pug">
  .portfolio-vue
    h2.heading-primary Project Nodejs Simple
    .clearfix
      ul.row.margin
        li.col-sm-12.col-md-6(v-for='(item, index) in getPortfolioNodejs' :key='index')
          .portfolio
            .portfolio-card
              .portfolio-heading
                .d-flex.justify-content-between.align-items-center
                  span
                    | {{ item.heading }}
                  span.d-flex
                    //- span.ico.pl-0
                    //-   a.trans.portfolio-link(:href='getLink + item.project' target='_blank')
                    //-     BaseIconExternalLink
                    span.ico.pr-0
                      a.trans.portfolio-link(:href='getSource + item.project' target='_blank')
                        BaseIconGit
              .portfolio-image
                img(src='@/assets/vuejs.jpg' :alt='item.heading')
            ul.portfolio-tags
              li(v-for='(tag, tagIndex) in item.tags' :key='tagIndex')
                span.tag {{ tag }}

</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PortfolioVue",
  computed: {
    ...mapGetters(["getPortfolioNodejs", "getGithub"]),
    getLink() {
      return `https://${this.getGithub}.github.io/`;
    },
    getSource() {
      return `https://github.com/${this.getGithub}/`;
    }
  }
};
</script>

<style lang="sass" scoped>
.ico
  line-height: 0
.portfolio-card
  &:not(:last-child)
      margin-bottom: 10px
</style>

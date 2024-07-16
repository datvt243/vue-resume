<template lang="pug">
  .person-contact
    ul.list-contact
      li.item(v-for='(item, index) in getPersonContact' :key='index')
        .d-flex.align-items-center
          .icon.text-green
            component(:is='item.icon')
          .text(v-html='item.text')
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PersonContact",
  computed: {
    ...mapGetters(["getPersonContact"])
  }
};
</script>

<style lang="sass" scoped>
.person
  &-contact
    font-size: 18px
    margin:
      left: auto
      right: auto
    .icon
      flex: 0 0 50px
      text-align: center
      font-size: 1.2em
      position: relative
      top: -.1em
    .text
      flex-grow: 1
      width: 1%
      vertical-align: middle
    .item:not(:last-child)
      margin-bottom: 10px
  @media (max-width: 991px)
    &-contact
      font-size: 16px
      .item:not(:last-child)
        margin-bottom: 6px
</style>

<template lang="pug">
  .person-info
    figure.avatar
      img(src='@/assets/avatar.jpg' :alt='getPersonInfo.name')
    h1.name
      | {{ getPersonInfo.name }}
    p.job.text-green.text-uppercase
      | {{ getPersonInfo.job }}
    .d-flex.justify-content-center.align-items-center
      .column
        span.sex.text-uppercase
          | {{ getPersonInfo.sex }}
          // <BaseIconMars classname="is-medium" />
      .column
        | |
      .column
        span.old.text-uppercase
          | {{ getPersonInfo.birthday }}
    .download.mt-4
      a.btn.btn-download(:href='getFilePDF' download='')
        | Download CV

</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PersonInfo",
  computed: {
    ...mapGetters(["getPersonInfo", "getFilePDF"])
  }
};
</script>

<style lang="sass" scope>
.avatar
  pointer-events: none
.btn.btn-download
  letter-spacing: .05em
  padding:
    left: 30px
    right: 30px
  border: 1px solid #42b983
    radius: 999px
.person
  &-info
    text-align: center
    width: 80%
    margin:
      left: auto
      right: auto
    .avatar
      position: relative
      overflow: hidden
      border-radius: 50%
      width: 100%
      height: 0
      line-height: 0
      padding-bottom: 100%
      margin:
        left: auto
        right: auto
        bottom: 20px
      img
        position: absolute
        width: 100%
        top: 0
        left: 0
        border: 3px solid #42b983
        border-radius: 50%
    .name
      text-transform: uppercase
      color: #fff
      font-size: 30px
      letter-spacing: .05em
    .job
      display: block
      font:
        size: 20px
        weight: 400
      letter-spacing: .05em
    .old, .sex
      font-size: 14px
  @media (max-width: 991px)
    &-info
      .name
        font-size: 24px
      .job
        font-size: 16px
  @media (max-width: 320px)
    &-info
      width: 90%
</style>

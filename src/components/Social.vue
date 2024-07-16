<template lang="pug">
  .social-wrapper
    ul.d-flex.justify-content-center.align-items-center.mb-0
      li
        a.trans(href='https://www.linkedin.com/in/datvt243' target='_blank')
          BaseIconLinkedin
      li
        a.trans(href='https://github.com/datvt243' target='_blank')
          BaseIconGithub
      li
        a.trans.pointer-none(href='#' target='_blank')
          BaseIconFacebook
      li
        a.trans.pointer-none(href='#' target='_blank')
          BaseIconTwitter

</template>

<script>
export default {
  name: "Social"
};
</script>

<style lang="sass" scoped>
.social-wrapper
  font-size: 30px
a
  color: currentColor
</style>

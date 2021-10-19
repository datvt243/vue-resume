<template lang="pug">
  p.download-cv
    a.trans.link(:href='getFilePDF' download='')
      BaseIconDownload(classname='is-large')
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DownloadCV",
  computed: {
    ...mapGetters(["getFilePDF"])
  }
};
</script>

<style lang="sass" scoped>
.download-cv
  display: inline-block
  display: block
  color: #888
  text-align: center
  border-top: 1px solid rgba(255,255,255,.1)
.link
  display: inline-block
  color: #888
  padding: 10px
@media (max-width: 480px)
  .download-cv
    font-size: 10px
</style>

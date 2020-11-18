<template>
  <p class="download-cv">
    <a :href="$store.state.filePDF" class="trans link" download>
      <BaseIconDownload classname="is-large" />
    </a>
  </p>
</template>

<script>
export default {
  name: "DownloadCV"
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
</style>

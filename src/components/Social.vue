<template>
  <div class="social-wrapper">
    <ul class="d-flex justify-content-center align-items-center">
      <li>
        <a href="#" class="trans pointer-none" target="_blank">
          <BaseIconLinkedin />
        </a>
      </li>
      <li>
        <a href="#" class="trans pointer-none" target="_blank">
          <BaseIconFacebook />
        </a>
      </li>
      <li>
        <a href="#" class="trans pointer-none" target="_blank">
          <BaseIconTwitter />
        </a>
      </li>
    </ul>
  </div>
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

<template>
  <div class="social-wrapper">
    <ul class="d-flex justify-content-center align-items-center mb-0">
      <li>
        <a
          href="https://www.linkedin.com/in/datvt243"
          class="trans"
          target="_blank"
        >
          <BaseIconLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/datvt243" class="trans" target="_blank">
          <BaseIconGithub />
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

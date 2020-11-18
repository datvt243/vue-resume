<template>
  <div class="person-contact">
    <ul class="list-contact">
      <li
        class="item"
        v-for="(item, index) in $store.state.personContact"
        :key="index"
      >
        <div class="d-flex align-items-center">
          <div class="icon text-green">
            <component :is="item.icon" />
          </div>
          <div class="text" v-html="item.text"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PersonContact"
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

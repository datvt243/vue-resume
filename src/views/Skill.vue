<template lang="pug">
  .skill
    .experience
      .personal-skills
        h2.heading-primary Kỹ Năng Cá Nhân
        .text-inner
          p 
            | Được mọi người đánh giá là hoà đồng và dễ mến, tính tình vui vẻ, sẵn sàng giúp đỡ mọi người trong lúc gặp khó khăn.
            br
            | Những lúc rãnh thường ngồi tìm hiểu, nạp thêm những kiến thức mới vào đầu.
          ul
            li Khả năng làm việc độc lập tốt
            li Làm việc nhóm, phân chia công việc
            li Chiệu áp lực tốt
            li Học hỏi nhanh
          .clearfix
            ProgressBar(v-for='(item, index) in getPersonalSkills' :key='index' :title='item.title' :value='item.value')
      .advanced-skills
        h2.heading-primary Kỹ Năng Chuyên Môn
        .text-inner
          p Trong 4 năm, tôi đã thiết kế và phát triển các trang web.
          .clearfix
            h3.heading-secondary Front-end
            .clearfix
              ProgressBar(v-for='(item, index) in getFrontendSkills' :key='index' :title='item.title' :value='item.value')
            hr
            .d-flex.flex-wrap.margin
              div(v-for='(item, index) in getFrontendTagsSkills' :key='index')
                Tag(:tag='item.text' :icon='item.icon')
          .clearfix
            h3.heading-secondary Thiết Kế
            .clearfix
              ProgressBar(v-for='(item, index) in getDesignSkills' :key='index' :title='item.title' :value='item.value')
            hr
            .d-flex.flex-wrap.margin
              div(v-for='(item, index) in getDesignTagsSkills' :key='index')
                Tag(:tag='item.text' :icon='item.icon')
</template>

<script>
import { mapGetters } from "vuex";
import ProgressBar from "@/components/ProgressBar.vue";
import Tag from "@/components/Tag.vue";
export default {
  name: "Skill",
  components: {
    ProgressBar,
    Tag
  },
  computed: {
    ...mapGetters([
      "getPersonalSkills",
      "getFrontendSkills",
      "getFrontendTagsSkills",
      "getDesignSkills",
      "getDesignTagsSkills"
    ])
  }
};
</script>

<style lang="sass" scoped>
.personal-skills
  margin-bottom: 60px
@media (max-width: 320px)
  hr
    margin: 10px 0
</style>

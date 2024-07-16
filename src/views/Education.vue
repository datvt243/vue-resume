<template lang="pug">
  .education
    h2.heading-primary Học vấn / bằng cấp
    ul.timeline-list
      li(v-for='(item, index) in getEducation' :key='index')
        .timeline-item
          p.timeline-date
            span.lable.strong {{ item.date }}
          p.timeline-job
            span.icon.margin-r5
              BaseIconUserGraduate
            span.middle Ngành:
              span.text-uppercase
                | {{ item.position }}
          p.timeline-school
            span.icon.margin-r10
              BaseIconSchool
            span.middle Trường: {{ item.school }}
          .text-inner
            p
              strong Xếp loại
              | : {{ item.type }}
              br
              strong Ngành
              | : {{ item.position }}
            p(v-html='item.desc')
    hr
    .text-inner
      div
        p.heading-secondary.margin-b0
          | Chứng chỉ thiết kế đồ họa 2D
        p.text-white.strong
          | Trung Tâm Tin Học ĐH KHTN
      p
        | Sau khi tốt nghiệp lớp kỹ thuật viên đồ hoạ 2D, tôi sử dụng tốt các phần
        | mềm phục vụ thiết kế như: Adobe Photoshop, Adobe Illustrator, Adobe
        | Lightroom. Kỹ năng thiết kế, các ẩn phẩm quảng cáo...

</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Education",
  computed: {
    ...mapGetters(["getEducation"])
  }
};
</script>

<style lang="sass" scoped></style>

<template lang="pug">
  .timeline-item.experience-item
    p.timeline-date
      span.lable.strong
        | {{ experience.time }}
    p.timeline-job
      span.icon.margin-r10
        BaseIconBriefcase
      span.middle {{ experience.position }}
    p.timeline-school
      span.icon.margin-r10
        BaseIconCompany
      span.middle {{ experience.company }}
    .text-inner
      ul
        li(v-for='(todo, todoIndex) in experience.todos' :key='todoIndex')
          | {{ todo }}
      p.timeline-desc(v-if='experience.desc' v-html='experience.desc')
    ul.d-flex.flex-wrap.margin
      li(v-for='(tag, tagIndex) in experience.tags' :key='tagIndex')
        tag(:tag='tag')

</template>

<script>
import Tag from "@/components/Tag.vue";
export default {
  name: "ExperienceItem",
  props: {
    experience: {
      type: Object,
      default() {
        return {
          time: "01/01/2020",
          position: "Vị trí",
          company: "Công ty",
          todos: [`Lorem ipsum dolor sit amet consectetur adipisicing elit.`],
          desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, temporibus.`,
          tags: ["tag01", "tag02"]
        };
      }
    }
  },
  components: {
    Tag
  }
};
</script>

<style lang="sass" scoped></style>

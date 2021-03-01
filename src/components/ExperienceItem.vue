<template>
  <div class="timeline-item experience-item">
    <p class="timeline-date">
      <span class="lable strong">
        {{ experience.time }}
      </span>
    </p>
    <p class="timeline-job">
      <span class="icon margin-r10"><BaseIconBriefcase /></span>
      <span class="middle">{{ experience.position }}</span>
    </p>
    <p class="timeline-school">
      <span class="icon margin-r10"><BaseIconCompany /></span>
      <span class="middle">{{ experience.company }}</span>
    </p>
    <div class="text-inner">
      <ul>
        <li v-for="(todo, todoIndex) in experience.todos" :key="todoIndex">
          {{ todo }}
        </li>
      </ul>
      <p
        class="timeline-desc"
        v-if="experience.desc"
        v-html="experience.desc"
      ></p>
    </div>
    <ul class="d-flex flex-wrap margin">
      <li v-for="(tag, tagIndex) in experience.tags" :key="tagIndex">
        <Tag :tag="tag" />
      </li>
    </ul>
  </div>
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

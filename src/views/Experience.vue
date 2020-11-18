<template>
  <div class="experience">
    <h2 class="heading-primary">
      Kinh Nghiệm Làm Việc
    </h2>
    <ul class="timeline-list">
      <li v-for="(item, index) in $store.state.experience" :key="index">
        <ExperienceItem :experience="item"></ExperienceItem>
        <!-- <div class="timeline-item">
          <p class="timeline-date">
            <span class="lable">
              {{ item.time }}
            </span>
          </p>
          <p class="timeline-job">
            {{ item.position }}
          </p>
          <p class="timeline-school">
            {{ item.company }}
          </p>
          <div class="text-inner">
            <ul>
              <li v-for="(subitem, subindex) in item.todo" :key="subindex">
                {{ subitem }}
              </li>
            </ul>
            <p class="timeline-desc" v-if="item.desc" v-html="item.desc"></p>
          </div>
          <ul class="d-flex flex-wrap margin">
            <li v-for="(tag, tagIndex) in item.tags" :key="tagIndex">
              <Tag :tag="tag" />
            </li>
          </ul>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
//import Tag from "@/components/Tag.vue";
import ExperienceItem from "@/components/ExperienceItem.vue";
export default {
  name: "Experience",
  components: {
    //Tag,
    ExperienceItem
  }
};
</script>

<style lang="sass" scoped>
.heading-primary
  margin-bottom: 40px
.text-inner
  margin-bottom: 10px
</style>

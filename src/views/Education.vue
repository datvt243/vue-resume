<template>
  <div class="education">
    <h2 class="heading-primary">
      Học vấn / bằng cấp
    </h2>
    <ul class="timeline-list">
      <li v-for="(item, index) in $store.state.education" :key="index">
        <div class="timeline-item">
          <p class="timeline-date">
            <span class="lable strong">{{ item.date }}</span>
          </p>
          <p class="timeline-job">
            <span class="icon margin-r5">
              <BaseIconUserGraduate />
            </span>
            <span class="middle">
              Ngành:
              <span class="text-uppercase">
                {{ item.position }}
              </span>
            </span>
          </p>
          <p class="timeline-school">
            <span class="icon margin-r10">
              <BaseIconSchool />
            </span>
            <span class="middle">
              Trường:
              {{ item.school }}
            </span>
          </p>
          <div class="text-inner">
            <p>
              <strong>Xếp loại</strong>: {{ item.type }}
              <br />
              <strong>Ngành</strong>: {{ item.position }}
            </p>
            <p v-html="item.desc"></p>
          </div>
        </div>
      </li>
    </ul>
    <hr />
    <div class="text-inner">
      <div>
        <p class="heading-secondary margin-b0">
          Chứng chỉ thiết kế đồ họa 2D
        </p>
        <p class="text-white strong">
          Trung Tâm Tin Học ĐH KHTN
        </p>
      </div>
      <p>
        Sau khi tốt nghiệp lớp kỹ thuật viên đồ hoạ 2D, tôi sử dụng tốt các phần
        mềm phục vụ thiết kế như: Adobe Photoshop, Adobe Illustrator, Adobe
        Lightroom. Kỹ năng thiết kế, các ẩn phẩm quảng cáo...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education"
};
</script>

<style lang="sass" scoped></style>

<template>
  <div>
    <!-- 头部 -->
    <header class="masthead" :style="`background-image: url('${bgImgUrl}')`">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ title }}</h1>
              <span class="subheading">{{ subTitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  subTitle: String,
  bgImgUrl: String,
});
</script>

<style scoped></style>

<template>
  <div class="home">
    <Carousel arrows autoplay :after-change="onChange">
      <template #prevArrow>
        <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
          <LeftCircleOutlined />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-slick-arrow" style="right: 10px">
          <RightCircleOutlined />
        </div>
      </template>
      <template v-for="item in data.page.data.attributes.blocks" :key="item.id">
        <div class="carousel-inner relative">
          <div class="carousel-item">
            <img
              class="home-poster object-center"
              :src="`${strapiURL + item.image.data.attributes.url}`"
              alt="..."
            />
          </div>

          <div class="carousel-intros absolute pl-24">
            <div class="lg:text-6xl text-5xl mb-4 text-zinc-900">
              {{ item.title }}
            </div>
            <div class="mb-8 px-2 leading-relaxed text-zinc-500">
              {{ item.subTitle }}
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
import { pageData } from "../graphql/page";
import { Carousel } from "ant-design-vue";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";

const {
  public: { strapiURL },
} = useRuntimeConfig();
// type CharactersResults = {
//   characters: {
//     results: {
//       id: string;
//       name: string;
//       image: string;
//       status: string;
//       species: string;
//       location: {
//         name: string;
//       };
//     }[];
//   };
// };

const { data } = await useAsyncQuery(pageData);

const onChange = (current: number) => {
  console.log(current);
};
</script>

<style scoped>
.carousel-item {
  width: 100vw;
  background: no-repeat center center scroll;
  min-height: 300px;
  max-height: 100vh;
  overflow: hidden;
}
.carousel-item img {
  width: 100%;
}
.carousel-intros {
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>

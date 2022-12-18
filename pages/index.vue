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
      <template v-for="item in data.graphicIntros.data" :key="item.id">
        <div class="carousel-wrap">
          <img
            class="home-poster object-center"
            :src="`${strapiURL + item.attributes.image.data[0].attributes.url}`"
            alt="..."
          />
          <div class="intros pl-46px">
            <h3 class="lg:text-6xl text-5xl mb-4 font-black text-gray-900">
              {{ item.attributes.title }}
            </h3>
            <div class="mb-8 px-2 leading-relaxed">
              {{ item.attributes.subTitle }}
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>
<script setup lang="ts">
import { allGraphicIntros } from "../graphql/query";
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
const { data } = await useAsyncQuery(allGraphicIntros);

const onChange = (current: number) => {
  console.log(current);
};
</script>

<style scoped>
.carousel-wrap {
}
.home-poster {
  height: 100%;
}
</style>

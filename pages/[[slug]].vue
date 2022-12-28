<template>
  <div>
    <PageHeader
      :title="graphicIntro.attributes.title"
      :subTitle="graphicIntro.attributes.subTitle"
      :bgImgUrl="`${
        strapiURL + graphicIntro.attributes.image.data.attributes.url
      }`"
    ></PageHeader>
    <!-- content -->
    <ArticlesPreview></ArticlesPreview>
  </div>
</template>
<script lang="ts">
export default {
  layout: "custom",
};
</script>
<script setup lang="ts">
import { getSlugPageQuery } from "../graphql/slugPage";
const route = useRoute();
const slug = route.params.slug;
const {
  public: { strapiURL },
} = useRuntimeConfig();
const pages = await useAsyncQuery(getSlugPageQuery, {
  slug: slug ? slug : "Home",
});
const unRefPageData = unref(pages.data);
console.log(
  "%c [ unRefPageData ]-24",
  "font-size:13px; background:pink; color:#bf2c9f;",
  unRefPageData
);
const curPageData = unRefPageData.pages.data[0];
const {
  attributes: {
    graphic_intro: { data: graphicIntro },
  },
} = curPageData;

// const {
//   graphic_intro: { data: graphicIntro },
// } = data[0];
</script>

<style></style>

<template>
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <!-- Post preview-->
        <template
          v-for="article in unRefArticlesData.articles.data"
          :key="article.attributes.id"
        >
          <div class="post-preview">
            <NuxtLink :to="article.attributes.linkUrl" target="_blank">
              <h2 class="post-title">
                {{ article.attributes.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ article.attributes.description }}
              </h3></NuxtLink
            >
            <p class="post-meta">{{ article.attributes.date }}</p>
          </div>
          <hr class="my-4" />
        </template>

        <!-- Pager-->
        <div class="d-flex justify-content-end mb-4">
          <a class="btn btn-primary text-uppercase" href="#!">查看更多 →</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { articlesQurey } from "../graphql/articles";
const route = useRoute();
const slug = route.params.slug;
const {
  public: { strapiURL },
} = useRuntimeConfig();
const articles = await useAsyncQuery(articlesQurey);
const unRefArticlesData = unref(articles.data);
console.log(
  "%c [ unRefPageData ]-24",
  "font-size:13px; background:pink; color:#bf2c9f;",
  unRefArticlesData
);

// const {
//   graphic_intro: { data: graphicIntro },
// } = data[0];
</script>

<style scoped></style>

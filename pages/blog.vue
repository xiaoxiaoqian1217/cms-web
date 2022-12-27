<template>
  <div>11111111111</div>
</template>
<script name="blog">
export default {
  layout: "custom",
};
</script>
<script setup>
import { getGraghicIntroQuery } from "../graphql/graphicIntro";
const { data } = await useAsyncQuery(getGraghicIntroQuery, { id: 8 });

console.log(
  "%c [ response ]-11",
  "font-size:13px; background:pink; color:#bf2c9f;",
  data
);
</script>

<style lang="scss" scoped></style>

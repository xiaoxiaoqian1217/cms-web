<template>
  <div>
    <SiteHeader :siteHeaderData="siteHeader"></SiteHeader>
    <slot />
    <SiteFooter :footerData="footer"></SiteFooter>
  </div>
</template>
<script setup lang="ts">
import { globalQurey } from "../graphql/global";
import { Card, CardMeta } from "ant-design-vue";

const {
  public: { strapiURL },
} = useRuntimeConfig();
const { data } = await useAsyncQuery(globalQurey);

const unRefGlobalData = unref(data);
const {
  global: {
    data: {
      attributes: { siteHeader, footer },
    },
  },
} = unRefGlobalData;
// const { navigations: newNavigations, footer } = global.attributes;
console.log(
  "%c [ footer ]-22",
  "font-size:13px; background:pink; color:#bf2c9f;",
  siteHeader,
  footer
);
const navigations = ref([]);

// onMounted(async () => {
//   const { data } = await sendReq("/api/navigations", { method: "GET" });
//   navigations.value = data;
// });
</script>

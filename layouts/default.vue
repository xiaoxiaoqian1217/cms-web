<template>
  <div>
    <SiteHeader :siteHeaderData="siteHeader"></SiteHeader>
    <slot />
    <!-- <SiteFooter :footerData="footer"></SiteFooter> -->
    <!-- 备案信息 -->
    <div class="bg-sky-300 flex align-center p-2 pr-12 justify-end">
      <a
        class="text-zinc-50"
        href="https://beian.miit.gov.cn/"
        target="_blank"
        >{{ icpNumber }}</a
      >
      <!-- <template v-if="">
        <a href="https://beian.miit.gov.cn/" target="_blank"
          >粤ICP备2022137710号-1</a
        >
      </template> -->
    </div>
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
      attributes: { siteHeader, footer, icpNumber },
    },
  },
} = unRefGlobalData;
// const { navigations: newNavigations, footer } = global.attributes;
console.log(
  "%c [ footer ]-22",
  "font-size:13px; background:pink; color:#bf2c9f;",
  siteHeader,
  footer,
  icpNumber
);
const navigations = ref([]);

// onMounted(async () => {
//   const { data } = await sendReq("/api/navigations", { method: "GET" });
//   navigations.value = data;
// });
</script>

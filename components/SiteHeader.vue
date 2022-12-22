<template>
  <div class="g-gray-500">
    <header class="max-h-60px px-1.5rem flex items-center g-gray-500">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- logo -->
        <!-- <a-dropdown v-model:visible="visible">
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">Clicking me will not close the menu.</a-menu-item>
        <a-menu-item key="2">Clicking me will not close the menu also.</a-menu-item>
        <a-menu-item key="3">Clicking me will close the menu</a-menu-item>
      </a-menu>
    </template>
  </a-dropdown> -->
        <div class="logo-wrap w-50">
          <img
            class="object-center w-[100%] h-10"
            :src="`${
              strapiURL + siteHeaderData.logo.iconUrl.data.attributes.url
            }`"
            alt="logo"
          />
        </div>
        <!-- <img /> -->
        <!-- logo.iconUrl.data.attributtes.url -->
        <!-- 顶部导航 -->
        <div
          class="text-xl mx-auto flex flex-wrap flex-col md:flex-row items-center"
        >
          <div
            class="p-4"
            v-for="navigation in siteHeaderData.navigations.data"
            :key="navigation.attributes.href"
          >
            <NuxtLink :to="navigation.attributes.href"
              >{{ navigation.attributes.label }}
            </NuxtLink>
          </div>
        </div>
        <!-- 右侧导航 -->
        <div>
          <NuxtLink to="https://baidi.com">{{
            siteHeaderData.loginButton.label
          }}</NuxtLink>
          <!-- <NuxtLink to="https://baidi.com">{{
          siteHeaderData.regButton.attributes.label
        }}</NuxtLink> -->
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  siteHeaderData: Array[Object],
});

const {
  public: { strapiURL },
} = useRuntimeConfig();
</script>

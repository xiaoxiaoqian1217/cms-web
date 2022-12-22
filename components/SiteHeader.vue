<template>
  <div class="g-gray-500">
    <header class="max-h-60px px-1.5rem flex items-center g-gray-500">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- logo -->

        <div class="logo-wrap w-50">
          <img
            class="object-center w-[100%] h-10"
            :src="`${strapiURL + navigation.logo.iconUrl.data.attributes.url}`"
            alt="logo"
          />
        </div>
        <!-- <img /> -->
        <!-- logo.iconUrl.data.attributtes.url -->
        <!-- 顶部导航 -->
        <div
          class="text-xl mx-auto flex flex-wrap flex-col md:flex-row items-center"
        >
          <div class="p-4" v-for="link in navigation.links" :key="link.href">
            <NuxtLink :to="link.href">{{ link.label }} </NuxtLink>
          </div>
        </div>
        <!-- 右侧导航 -->
        <div>
          <NuxtLink to="https://baidi.com">{{
            navigation.loginButton.label
          }}</NuxtLink>
          <!-- <NuxtLink to="https://baidi.com">{{
          navigation.regButton.attributes.label
        }}</NuxtLink> -->
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  navigation: Array[Object],
});

const {
  public: { strapiURL },
} = useRuntimeConfig();
</script>

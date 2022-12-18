<template>
  <div class="g-gray-500">
    <header class="max-h-60px px-1.5rem flex items-center g-gray-500">
      <!-- logo -->
      <div>
        <span>我的网站111</span>
      </div>
      <!-- 顶部导航 -->
      <div class="flex flex-grow items-center justify-center">
        <div class="p-4" v-for="navigation in navigations" :key="navigation.id">
          <NuxtLink :to="navigation.attributes.url"
            >{{ navigation.attributes.name }}
          </NuxtLink>
        </div>
      </div>
      <!-- 右侧导航 -->
      <div>
        <NuxtLink to="https://baidi.com">安装</NuxtLink>
        <NuxtLink to="https://baidi.com">注册</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const navigations = ref([]);

onMounted(async () => {
  const { data } = await sendReq("/api/navigations", { method: "GET" });
  console.log(
    "%c [ data ]-33",
    "font-size:13px; background:pink; color:#bf2c9f;",
    data
  );
  navigations.value = data;
});
</script>

<style scoped></style>

<template>
  <div>
    <!-- 导航 -->
    <!-- Navigation-->

    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div class="container px-4 px-lg-5">
        <NuxtLink class="navbar-brand" to="/"
          >{{ siteHeaderData.title }}
        </NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          菜单
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
            <li
              v-for="navigation in siteHeaderData.navigations.data"
              :key="navigation.attributes.href"
              class="nav-item"
            >
              <NuxtLink
                class="nav-link px-lg-3 py-3 py-lg-4"
                :to="navigation.attributes.href"
                :target="navigation.attributes.target"
                >{{ navigation.attributes.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  siteHeaderData: Array[Object],
});
</script>

<style scoped></style>

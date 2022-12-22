<template>
  <div class="bg-gray-50">
    <footer class="pt-24 pb-24 xl:pt-24">
      <div
        class="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300"
      >
        <div class="logo-wrap flex items-center">
          <div class="logo-wrap w-50 mr-4">
            <img
              class="object-center w-[100%] h-10"
              :src="`${
                strapiURL + footerData.companyInfo.iconUrl.data.attributes.url
              }`"
              alt="logo"
            />
          </div>
          <span>
            {{ footerData.companyInfo.des }}
          </span>
        </div>
        <p class="mt-2 mb-2">{{ footerData.companyInfo.fullName }}</p>
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-2">
          <template v-for="field in footerData.footerFields" :key="field.label">
            <div class="field flex">
              <span class="mr-2 min-w-80px flex-none">{{ field.label }}: </span>
              <pre>{{ field.value }} </pre>
            </div>
          </template>
        </div>
        <!-- <div class="footer-fields flex flex-wrap">
  
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  footerData: Object,
});
const {
  public: { strapiURL },
} = useRuntimeConfig();
</script>

<style scoped></style>

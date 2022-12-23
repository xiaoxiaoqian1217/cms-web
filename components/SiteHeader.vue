<template>
  <div class="g-gray-500">
    <header class="max-h-60px px-1.5rem flex items-center g-gray-500">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- logo -->
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
            <template v-if="navigation.attributes.children.data.length">
              <div>
                <Dropdown v-model:visible="visible">
                  <a class="ant-dropdown-link" @click.prevent>
                    {{ navigation.attributes.label }} <DownOutlined />
                  </a>
                  <template #overlay>
                    <Menu @click="handleMenuClick">
                      <div
                        v-for="subLink in navigation.attributes.children.data"
                        :key="subLink.attributes.hre"
                      >
                        <MenuItem key="1">
                          <NuxtLink :to="subLink.attributes.href"
                            >{{ subLink.attributes.label }}
                          </NuxtLink>
                        </MenuItem>
                      </div>
                    </Menu>
                  </template>
                </Dropdown>
              </div>
            </template>
            <template v-else>
              <NuxtLink :to="navigation.attributes.href"
                >{{ navigation.attributes.label }}
              </NuxtLink>
            </template>
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
import { DownOutlined } from "@ant-design/icons-vue";
import { MenuProps, Menu, Dropdown, MenuItem } from "ant-design-vue";
const props = defineProps({
  siteHeaderData: Array[Object],
});

const {
  public: { strapiURL },
} = useRuntimeConfig();
</script>

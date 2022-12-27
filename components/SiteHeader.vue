<template>
  <!-- class="bg-sky-300" -->
  <div>
    <header class="max-h-60px px-1.5rem flex items-center g-gray-500">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <!-- logo -->
        <div class="logo-wrap w-50">
          <template v-if="siteHeaderData.logo.iconUrl?.data?.attributes.url">
            <img
              class="object-center w-[100%] h-10"
              :src="`${
                strapiURL + siteHeaderData.logo.iconUrl.data.attributes.url
              }`"
              alt="logo"
            />
          </template>
          <span>{{ siteHeaderData.logo.siteTitle }}</span>
        </div>
        <!-- <img /> -->
        <!-- logo.iconUrl.data.attributtes.url -->
        <!-- 顶部导航 -->
        <div class="mx-auto flex flex-wrap flex-col md:flex-row items-center">
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
                    <Menu>
                      <div
                        v-for="subLink in navigation.attributes.children.data"
                        :key="subLink.attributes.href"
                      >
                        <MenuItem key="1">
                          <NuxtLink
                            :to="subLink.attributes.href"
                            :target="subLink.attributes.target"
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
              <NuxtLink
                :to="navigation.attributes.href"
                :target="navigation.attributes.target"
                >{{ navigation.attributes.label }}
              </NuxtLink>
            </template>
          </div>
        </div>
        <!-- 右侧导航 -->
        <div>
          <NuxtLink :to="siteHeaderData.loginButton.href">
            <div class="w-10 h-10 rounded-full">
              <img
                class="w-[100%]"
                :src="`${
                  strapiURL +
                  siteHeaderData.loginButton.image.data.attributes.url
                }`"
              />
            </div>
          </NuxtLink>
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

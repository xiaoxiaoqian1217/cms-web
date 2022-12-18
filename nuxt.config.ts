// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
export default defineNuxtConfig({
  modules: ["nuxt-windicss", "@nuxtjs/apollo"],
  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: "less",
            resolveIcons: true,
          }),
        ],
      }),
    ],
    ssr: {
      noExternal: [
        "compute-scroll-into-view",
        "ant-design-vue",
        "@ant-design/icons-vue",
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // https://www.antdv.com/docs/vue/customize-theme/#Ant-Design-Vue-Less-variables
        },
      },
    },
  },
  css: [
    // windi preflight
    "virtual:windi-base.css",
    // your stylesheets which overrides the preflight
    "~/assets/global.less",
    // windi extras
    "virtual:windi-components.css",
    "virtual:windi-utilities.css",
  ],
  runtimeConfig: {
    public: {
      strapiURL: "http://localhost:1337" || process.env.STRAPI_URL,
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:1337/graphql",
      },
    },
  },
});

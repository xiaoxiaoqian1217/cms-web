// ./composables/sendReq.js
import { useRuntimeConfig } from "#app";

// function to send requests
// pass GraphQL URL and request options

export const sendReq = async (api, opts) => {
  const {
    public: { strapiURL },
  } = useRuntimeConfig();
  try {
    let res = await $fetch(api, {
      baseURL: strapiURL,
      method: "POST",
      // fetch options
      ...opts,
    });

    return res;
  } catch (error) {
    console.log(error);
    return {
      errors: error,
    };
  }
};

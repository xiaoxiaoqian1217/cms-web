<template>
  <div>
    一些共享的布局内容：
    <slot />
  </div>
</template>

<script>
export default {
  layout: "false",
};
</script>

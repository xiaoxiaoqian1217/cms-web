<template>
  <div>
    <h1>Indecx page</h1>
    <div>{{ $route.params.group }}</div>
    <div>{{ $route.params.id }}</div>

    <!-- <NuxtLink to="/home">{{ $route.params.id }}</NuxtLink> -->
    <!-- <NuxtLink to="/home"></NuxtLink> -->
  </div>
</template>

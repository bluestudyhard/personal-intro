<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})
// const name = ref('')
// 重定向到 /about
// function go() {
//   if (name.value) {
//     router.push({ path: '/about', query: { name: name.value } })
//   }
</script>

<template>
  <h1 class="text-4xl">
    Hello, Vitesse!
  </h1>
  <div i-carbon-accessibility-alt inline-block text-4xl />
  <div i-uil-blogger-alt inline-block text-4xl />
</template>

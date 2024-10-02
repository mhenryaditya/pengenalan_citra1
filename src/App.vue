<script setup lang="ts">
import { ref, type Ref, provide } from 'vue';
import { RouterView } from 'vue-router'

let initPct: Ref<File | undefined> = ref()
let menuClick: Ref<number> = ref(0)

provide('initPct', initPct)
provide('menuClick', menuClick)

</script>

<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <router-view name="main"></router-view>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
<template>
  <div id="app">
    <div>
      <router-view></router-view>
      <main-tab-bar/>
    </div>

  </div>
</template>

<script>
import MainTabBar from "@/components/tabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
</style>

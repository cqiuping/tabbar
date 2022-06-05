<template>
  <tab-bar>
    <div id="tab-bar">

    </div>
  </tab-bar>
</template>

<script>
import TabBar from './TabBar'
import TabBarfItem from "@/components/tabbar/TabBarfItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarfItem
  },
  methods: {
    routeTo(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>

</style>

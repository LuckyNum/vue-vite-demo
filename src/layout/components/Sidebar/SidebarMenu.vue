<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!appStore.applicationStore.sidebarOpened"
    :default-active="activeMenu"
    :background-color="appStore.themeStore.cssVar.menuBg"
    :text-color="appStore.themeStore.cssVar.menuText"
    :active-text-color="appStore.themeStore.cssVar.menuActiveText"
    :uniqueOpened="true"
    router
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup lang="ts">
import SidebarItem from '@/layout/components/Sidebar/SidebarItem.vue'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { filterRouters, generateMenus } from '@/utils/route.js'
import appStore from '@/stores'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

const activeMenu = computed(() => {
  const { path } = useRoute()
  return path
})
</script>

<style lang="scss" scoped></style>

<template>
  <el-config-provider
    :locale="appStore.applicationStore.language === 'en' ? en : zhCn"
  >
    <div
      class="app-wrapper"
      :class="[
        appStore.applicationStore.sidebarOpened ? 'openSidebar' : 'hideSidebar'
      ]"
    >
      <!-- 左侧 menu -->
      <sidebar
        id="guide-sidebar"
        class="sidebar-container"
        :style="{ backgroundColor: appStore.themeStore.cssVar.menuBg }"
      />
      <div class="main-container">
        <div class="fixed-header">
          <!-- 顶部的 navbar -->
          <navbar />
        </div>
        <!-- 内容区 -->
        <app-main />
      </div>
      <statusbar></statusbar>
    </div>
  </el-config-provider>
</template>

<script setup lang="ts">
import Navbar from '@/layout/components/Navbar.vue'
import Sidebar from '@/layout/components/Sidebar/Sidebar.vue'
import AppMain from '@/layout/components/AppMain.vue'
import appStore from '@/stores'
import en from 'element-plus/lib/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import Statusbar from '@/layout/components/Statusbar.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/mixin.scss';
@import '@/assets/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
  transition: width #{$sideBarDuration};
}
</style>

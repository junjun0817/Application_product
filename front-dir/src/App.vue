<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
</script>


<template>
  <div class="home">
  <HeaderItem/>
  <RouterView/>
  <FooterItem/>
</div>
</template>

<style lang="scss">
@import './reset.css';

.home {
  background-color: rgb(62, 239, 115);
  // height: 1200px;
  // width: 2000px;
}
</style>

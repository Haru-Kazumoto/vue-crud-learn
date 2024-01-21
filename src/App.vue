<template>
  <div class="container">
    <Navbar />
    <Content />
    <nav>
    <!-- HOME PAGE -->
      <!-- <router-link to="/" />  -->
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
  import Content from './components/Content.vue';
</script>
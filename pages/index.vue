<template>
  <container class="container">
    <NuxtLogo class="logo"/>
  </container>
</template>

<script lang="ts">
import Vue from 'vue';
import NuxtLogo from '~/components/NuxtLogo.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { NuxtLogo }
});
</script>

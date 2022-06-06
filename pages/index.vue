<template>
  <container class="container">
    Hello World
    <DefaultTemplate />
    <NuxtLogo class="logo" />
  </container>
</template>

<script lang="ts">
import Vue from 'vue';
import NuxtLogo from '~/components/NuxtLogo.vue';
import DefaultTemplate from '~/layouts/default-template.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { NuxtLogo, DefaultTemplate }
});
</script>

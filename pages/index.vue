<template>
  <container class="container">
    Hello World
    <NuxtLogo class="logo"/>
  </container>  
</template>

<script lang="ts">
import Vue from 'vue';
import Default from '~/layouts/default.vue';
import NuxtLogo from '~/components/NuxtLogo.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: { Default, NuxtLogo }
});
</script>


<style scope> 

</style>
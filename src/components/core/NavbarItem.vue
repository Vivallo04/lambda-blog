<script setup lang="ts">
defineProps<{
  label: string,
}>();
</script>

<template>
  <div class="item">
    <div class="details">
      <span>
        <slot name="link"></slot>
         <a target="_blank" href="https://vitejs.dev/">{{ label }}</a>
      </span>
    </div>
  </div>
</template>


<style>

</style>

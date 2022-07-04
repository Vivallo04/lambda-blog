<script setup lang="ts">
defineProps<{
    color: string, 
    text: string
}>();
</script>


<template>
    <button 
        :style="{ background: color }"
        class="lmbd-button rounded-md border 0">{{text}}
    </button> 
</template>

<style>

</style>
<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
})

</script>

<template>
  <h1>
    Details
  </h1>

  <p>id : {{ id }}</p>
</template>

<style scoped>

</style>

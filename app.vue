<script lang="ts" setup>
  const now = new Date();
  const tomorrow = addDays(now, 1);
</script>

<template>
  <div>
    <AppTest />
    <Button/>
    {{ PI }}
    {{ tomorrow }}
  </div>
</template>

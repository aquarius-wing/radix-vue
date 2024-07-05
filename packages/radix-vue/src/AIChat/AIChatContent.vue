<script setup lang="ts">
import { CollectionSlot } from '@/Collection'
import { Primitive } from '@/Primitive'
</script>

<template>
  <CollectionSlot>
    <Primitive as="div">
      <slot />
    </Primitive>
  </CollectionSlot>
</template>

<style scoped>

</style>

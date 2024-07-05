<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface AIChatContentProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { CollectionSlot } from '@/Collection'
import { Primitive } from '@/Primitive'

const props = withDefaults(defineProps<AIChatContentProps>(), {
  as: 'div',
  prompt: '',
  messages: () => [],
})
</script>

<template>
  <CollectionSlot>
    <Primitive
      :as="as"
      :as-child="asChild"
    >
      <slot />
    </Primitive>
  </CollectionSlot>
</template>

<style scoped>

</style>

<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface ComboboxEmptyProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { injectAIChatRootContext } from './AIChatRoot.vue'
import { Primitive } from '@/Primitive'
import { useForwardExpose } from '@/shared'

const props = defineProps<ComboboxEmptyProps>()
const rootContext = injectAIChatRootContext()
const isEmpty = computed(() => rootContext.messages.value.length === 0)
useForwardExpose()
</script>

<template>
  <Primitive
    v-if="isEmpty"
    v-bind="props"
  >
    <slot>No messages</slot>
  </Primitive>
</template>

<style scoped>

</style>

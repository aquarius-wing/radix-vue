<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface AIChatSendProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { useForwardExpose } from '@/shared'
import { injectAIChatRootContext } from './AIChatRoot.vue'

const props = withDefaults(defineProps<AIChatSendProps>(), {
  as: 'button',
})
const rootContext = injectAIChatRootContext()
const { forwardRef } = useForwardExpose()
</script>

<template>
  <Primitive
    v-bind="props"
    :ref="forwardRef"
    :type="as === 'button' ? 'button' : undefined"
    :as="as"
    :as-child="asChild"
    @click="rootContext.onSendMessage"
  >
    <slot />
  </Primitive>
</template>

<style scoped>

</style>

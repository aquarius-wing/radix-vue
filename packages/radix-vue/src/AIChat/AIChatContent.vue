<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface AIChatContentProps extends PrimitiveProps {}
</script>

<script setup lang="ts">
import { CollectionSlot } from '@/Collection'
import { Primitive } from '@/Primitive'
import { injectAIChatRootContext } from './AIChatRoot.vue'
import { useForwardExpose } from '@/shared'
import { onMounted } from 'vue'

const props = withDefaults(defineProps<AIChatContentProps>(), {
  as: 'div',
  prompt: '',
  messages: () => [],
})
const { forwardRef, currentElement } = useForwardExpose()
const rootContext = injectAIChatRootContext()

onMounted(() => {
  rootContext.onContentElementChange(currentElement.value!)
})
</script>

<template>
  <CollectionSlot>
    <Primitive
      :ref="forwardRef"
      :as="as"
      :as-child="asChild"
    >
      <slot />
    </Primitive>
  </CollectionSlot>
</template>

<style scoped>

</style>

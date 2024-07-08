<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'

export interface AIChatAutoScroll extends PrimitiveProps {
  /** The value given as data when submitted with a `name`. */
}
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { injectAIChatRootContext } from './AIChatRoot.vue'
import { useScroll } from '@vueuse/core'
import { Primitive } from '@/Primitive'

const props = defineProps<AIChatAutoScroll>()
const rootContext = injectAIChatRootContext()
const autoScroll = ref(true)

const { y } = useScroll(rootContext.contentElement)

function scrollToBottom() {
  y.value = rootContext.contentElement.value!.scrollHeight
}
watch(y, (newY) => {
  // If the user scrolls up a little bit, stop automatic scrolling.
  if (newY < rootContext.contentElement.value!.scrollHeight - rootContext.contentElement.value!.clientHeight - 10) {
    autoScroll.value = false
  }
  else {
    autoScroll.value = true
  }
})

watch(rootContext.messages, () => {
  if (autoScroll.value) {
    scrollToBottom()
  }
}, {
  deep: true,
})

function onScrollToBottom() {
  autoScroll.value = true
  scrollToBottom()
}

// Ensure initial scrolling to the bottom when the component is mounted.
onMounted(() => {
  scrollToBottom()
  rootContext.emitter.on('scrollToBottom', onScrollToBottom)
})

onUnmounted(() => {
  rootContext.emitter.off('scrollToBottom', onScrollToBottom)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
</style>

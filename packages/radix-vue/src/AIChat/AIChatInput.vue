<script lang="ts">
import type { PrimitiveProps } from '@/Primitive'
import { useForwardExpose } from '@/shared'
import { injectAIChatRootContext } from './AIChatRoot.vue'

export interface AIChatInputProps extends PrimitiveProps {
  /** Native input type */
  type?: string
  /** When `true`, prevents the user from interacting with item */
  disabled?: boolean
  /** Focus on element when mounted. */
  autoFocus?: boolean
}
</script>

<script setup lang="ts">
import { Primitive } from '@/Primitive'
import { onMounted } from 'vue'

const props = withDefaults(defineProps<AIChatInputProps>(), {
  type: 'text',
  as: 'textarea',
})

const rootContext = injectAIChatRootContext()

const { forwardRef, currentElement } = useForwardExpose()
onMounted(() => {
  const inputEl = currentElement.value.nodeName === 'INPUT'
    ? currentElement.value as HTMLInputElement
    : currentElement.value.querySelector('input')
  if (!inputEl)
    return

  rootContext.onInputElementChange(inputEl)

  setTimeout(() => {
    // make sure all DOM was flush then only capture the focus
    if (props.autoFocus)
      inputEl?.focus()
  }, 1)
})

function handleInput(event: Event) {
  rootContext.prompt.value = (event.target as HTMLInputElement)?.value
}
</script>

<template>
  <Primitive
    :ref="forwardRef"
    :as="as"
    :as-child="asChild"
    :type="type"
    :disabled="disabled"
    :value="rootContext.prompt.value"
    :aria-disabled="disabled ?? undefined"
    role="combobox"
    autocomplete="false"
    @input="handleInput"
  >
    <slot />
  </Primitive>
</template>

<style scoped>

</style>

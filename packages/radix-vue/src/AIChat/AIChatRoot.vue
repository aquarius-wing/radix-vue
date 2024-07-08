<script lang="ts">
import type { Ref } from 'vue'
import { createContext } from '@/shared'
import type { PrimitiveProps } from '@/Primitive'
import type { Emitter } from 'mitt'

export type Message = {
  content: string
  role: 'system' | 'user' | 'assistant'
}

type AIChatRootContext = {
  prompt: Ref<string>
  messages: Ref<Message[]>
  inputElement: Ref<HTMLInputElement | undefined>
  onInputElementChange: (el: HTMLInputElement) => void
  contentElement: Ref<HTMLElement | undefined>
  onContentElementChange: (el: HTMLElement) => void
  onSendMessage: () => void
  emitter: Emitter<AIChatRootEvents>
}

export const [injectAIChatRootContext, provideAIChatRootContext]
  = createContext<AIChatRootContext>('AIChat')

export type AIChatRootEmits = {
  'send': [value: void]
  'update:prompt': [value: string]
  'update:messages': [value: Message[]]
}

export type AIChatRootEvents = {
  scrollToBottom: void
}

export interface AIChatRootProps extends PrimitiveProps {
  prompt?: string
  messages: Message[]
  emitter?: Emitter<AIChatRootEvents>
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ref, watch } from 'vue'
import { createCollection } from '@/Collection'
import { Primitive } from '@/Primitive'
import mitt from 'mitt'

const props = withDefaults(defineProps<AIChatRootProps>(), {
  as: 'div',
  prompt: '',
  messages: () => [],
})

const emit = defineEmits(['update:prompt', 'update:messages', 'send'])

const prompt = useVModel(props, 'prompt', emit, {
  defaultValue: '',
  passive: (props.prompt === undefined) as false,
}) as Ref<string>

const messages = useVModel(props, 'messages', emit, {
  defaultValue: [],
  passive: true,
  deep: true,
}) as Ref<Message[]>

const inputElement = ref<HTMLInputElement>()
const contentElement = ref<HTMLElement>()
const { getItems, reactiveItems, itemMapSize } = createCollection<{ value: Message }>('data-radix-vue-ai-chat-item')

watch(() => itemMapSize.value, () => {
  messages.value = getItems().map(i => i.value)
}, {
  immediate: true,
  flush: 'post',
})

provideAIChatRootContext({
  prompt,
  messages,
  inputElement,
  onInputElementChange: val => inputElement.value = val,
  contentElement,
  onContentElementChange: val => contentElement.value = val,
  onSendMessage: () => {
    emit('send')
  },
  emitter: props.emitter || mitt<AIChatRootEvents>(),
})
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="asChild"
  >
    <slot />
  </Primitive>
</template>

<style scoped>

</style>

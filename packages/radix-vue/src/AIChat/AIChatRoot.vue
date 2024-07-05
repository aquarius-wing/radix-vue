<script lang="ts">
import type { Ref } from 'vue'
import { createContext } from '@/shared'
import type { PrimitiveProps } from '@/Primitive'

export type Message = {
  content: string
  role: 'system' | 'user' | 'assistant'
}

type AIChatRootContext = {
  prompt: Ref<string>
  messages: Ref<Message[]>
  inputElement: Ref<HTMLInputElement | undefined>
  onInputElementChange: (el: HTMLInputElement) => void
  onSendMessage: () => void
}

export const [injectAIChatRootContext, provideAIChatRootContext]
  = createContext<AIChatRootContext>('AIChat')

export type AIChatRootEmits = {
  'send': [value: void]
  'update:prompt': [value: string]
  'update:messages': [value: Message[]]
}

export interface AIChatRootProps extends PrimitiveProps {
  prompt?: string
  messages?: Message[]
}
</script>

<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { ref, watch } from 'vue'
import { createCollection } from '@/Collection'

const props = withDefaults(defineProps<AIChatRootProps>(), {
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
  passive: (props.messages === undefined) as false,
  deep: true,
}) as Ref<Message[]>

const inputElement = ref<HTMLInputElement>()
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
  onSendMessage: () => {
    emit('send')
  },
})
</script>

<template>
  <div class="">
    AIChatRoot
    <slot />
  </div>
</template>

<style scoped>

</style>

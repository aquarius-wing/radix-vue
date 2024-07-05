<script setup lang="ts">
import { AIChatContent, AIChatInput, AIChatMessageItem, AIChatRoot, AIChatSend } from '@/AIChat'
import { onMounted, ref } from 'vue'
import type { Message } from '@/AIChat/AIChatRoot.vue'

const prompt = ref('')
const messages = ref<Message[]>([])
function onSend() {
  messages.value.push({
    role: 'user',
    content: prompt.value,
  })
  prompt.value = ''
}
onMounted(() => {
  messages.value.push({ role: 'assistant', content: 'Hello world' })
})
</script>

<template>
  <Story title="AI Chat/Basic">
    <Variant title="Default">
      <AIChatRoot
        v-model:prompt="prompt"
        class="w-full h-[600px]"
        @send="onSend"
      >
        <AIChatContent class="space-y-2 py-2">
          <AIChatMessageItem
            v-for="(message, index) in messages"
            :key="index"
            :value="message"
            class="w-full flex"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div class="max-w-xs bg-gray-100 text-gray-800 text-wrap p-2 rounded-lg shadow-sm">
              {{ message.content }}
            </div>
          </AIChatMessageItem>
        </AIChatContent>
        <div class="flex items-center flex-col rounded-md border border-input border-gray-200 bg-gray-100 p-4">
          <AIChatInput
            class="flex-1 min-h-20 w-full px-3 py-2 bg-transparent resize-none text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-none  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <div class="flex-none w-full flex justify-between">
            <AIChatSend class="ml-auto">
              Send
            </AIChatSend>
          </div>
        </div>
      </AIChatRoot>
    </Variant>
  </Story>
</template>

<style scoped>

</style>

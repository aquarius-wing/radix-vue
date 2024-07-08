<script setup lang="ts">
import { AIChatAutoScroll, AIChatContent, AIChatInput, AIChatMessageItem, AIChatRoot, AIChatSend } from '@/AIChat'
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
  const content = `Qui optio eligendi odio facilis saepe nemo a ratione. Et minima et amet voluptatem quisquam. Ut cumque omnis qui distinctio qui qui. Vel animi numquam dolorem quo.
Explicabo deleniti quaerat consectetur. Quis est maxime necessitatibus facere qui aliquid est. Repudiandae quibusdam et et nemo est. Rerum laborum magni reiciendis et. Velit et id iusto voluptatem nesciunt expedita sint ullam. At id rerum quis voluptatibus voluptatem sit et et eum. Omnis ea aut quasi aut distinctio necessitatibus unde est pariatur ut.
Minus modi quaerat nemo omnis qui sunt pariatur aut molestias ea excepturi. Id id necessitatibus aliquid est iusto est rem deleniti distinctio. Ea quo quisquam accusantium totam cupiditate deleniti consectetur alias minima ex sit odio. Aut nostrum alias est similique ducimus cum alias voluptatem nulla aliquam dolorem aut similique.
Exercitationem consectetur rerum distinctio distinctio dignissimos voluptatem totam est autem earum sapiente odit iste quae eius. Eum et nihil at perspiciatis voluptatem inventore mollitia nesciunt aspernatur. Suscipit reprehenderit voluptas sequi nobis ex tenetur et labore deserunt qui consequatur. Et sit ut dolorum quod veniam cum est. Voluptas ipsa corrupti sint architecto aliquam asperiores adipisci ut. Dolores vel consequatur est earum.
Quam laborum quam sint. Iure explicabo error minus consequatur officia repellat sint et. Consequatur similique voluptatem harum tempore. Sunt odio corporis voluptas eaque alias. Ratione quia quibusdam recusandae explicabo velit. Consectetur et repellat aut id molestiae veniam ut nostrum voluptas ex. Esse consequatur dignissimos officia veniam eum perferendis ex laborum libero porro beatae. Aut quaerat tempore corporis ut. Voluptatem dolorem incidunt ut sapiente rem aut debitis quos distinctio quia laborum veritatis.`
  messages.value.push({
    role: 'assistant',
    content: '',
  })
  const assistantMessageIndex = messages.value.length - 1
  let i = 1
  const interval = setInterval(() => {
    messages.value[assistantMessageIndex] = {
      role: 'assistant',
      content: content.substring(0, i),
    }
    i += 1
    if (i > content.length)
      clearInterval(interval)
  }, 20)
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
        v-model:messages="messages"
        class="w-full h-[800px]"
        @send="onSend"
      >
        <AIChatContent class="space-y-2 py-2 h-80 overflow-y-auto">
          <AIChatMessageItem
            v-for="(message, index) in messages"
            :key="index"
            :value="message"
            class="w-full flex"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div class="max-w-xs bg-gray-100 text-gray-800 p-2 rounded-lg shadow-sm break-all">
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
        <AIChatAutoScroll />
      </AIChatRoot>
    </Variant>
  </Story>
</template>

<style scoped>

</style>

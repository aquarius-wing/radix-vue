<script lang="ts">
import type {PrimitiveProps} from "@/Primitive";
import type {Message} from "@/AIChat/AIChatRoot.vue";


export interface AIChatMessageItemProps extends PrimitiveProps {
  /** The value given as data when submitted with a `name`. */
  value: Message
}
</script>

<script setup lang="ts">
import {Primitive} from "@/Primitive";
import {useForwardExpose, useId} from "@/shared";
import { CollectionItem } from '@/Collection'
import { injectAIChatRootContext } from './AIChatRoot.vue'

const props = defineProps<AIChatMessageItemProps>()

const rootContext = injectAIChatRootContext()
const { forwardRef } = useForwardExpose()
const textId = useId(undefined, 'radix-vue-ai-chat-item')
const optionId = useId(undefined, 'radix-vue-ai-chat-option')
</script>

<template>
  <CollectionItem>
    <Primitive
      :id="optionId"
      :ref="forwardRef"
      role="textbox"
      tabindex="-1"
      :aria-labelledby="textId"
      :as="as"
      :as-child="asChild"
    >
      <slot>{{ value.content }}</slot>
    </Primitive>
  </CollectionItem>
</template>

<style scoped>

</style>

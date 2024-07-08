import { Ref } from 'vue';
import { PrimitiveProps } from '../Primitive';
import { Emitter } from 'mitt';

export type Message = {
    content: string;
    role: 'system' | 'user' | 'assistant';
};
type AIChatRootContext = {
    prompt: Ref<string>;
    messages: Ref<Message[]>;
    inputElement: Ref<HTMLInputElement | undefined>;
    onInputElementChange: (el: HTMLInputElement) => void;
    contentElement: Ref<HTMLElement | undefined>;
    onContentElementChange: (el: HTMLElement) => void;
    onSendMessage: () => void;
    emitter: Emitter<AIChatRootEvents>;
};
export declare const injectAIChatRootContext: <T extends AIChatRootContext | null | undefined = AIChatRootContext>(fallback?: T | undefined) => T extends null ? AIChatRootContext | null : AIChatRootContext, provideAIChatRootContext: (contextValue: AIChatRootContext) => AIChatRootContext;
export type AIChatRootEmits = {
    'send': [value: void];
    'update:prompt': [value: string];
    'update:messages': [value: Message[]];
};
export type AIChatRootEvents = {
    scrollToBottom: void;
};
export interface AIChatRootProps extends PrimitiveProps {
    prompt?: string;
    messages: Message[];
    emitter?: Emitter<AIChatRootEvents>;
}
declare const _default: __VLS_WithTemplateSlots<import('vue').DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AIChatRootProps>, {
    as: string;
    prompt: string;
    messages: () => never[];
}>, {}, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:prompt": (...args: any[]) => void;
    "update:messages": (...args: any[]) => void;
    send: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AIChatRootProps>, {
    as: string;
    prompt: string;
    messages: () => never[];
}>>> & {
    "onUpdate:prompt"?: ((...args: any[]) => any) | undefined;
    "onUpdate:messages"?: ((...args: any[]) => any) | undefined;
    onSend?: ((...args: any[]) => any) | undefined;
}, {
    as: import('../Primitive').AsTag | import('vue').Component;
    prompt: string;
    messages: Message[];
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

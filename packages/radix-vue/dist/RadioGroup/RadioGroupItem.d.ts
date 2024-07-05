import type { ComputedRef } from 'vue';
import type { RadioProps } from "./Radio";
export interface RadioGroupItemProps extends Omit<RadioProps, 'checked'> {
}
interface RadioGroupItemContext {
    disabled: ComputedRef<boolean>;
    checked: ComputedRef<boolean>;
}
export declare const injectRadioGroupItemContext: <T extends RadioGroupItemContext | null | undefined = RadioGroupItemContext>(fallback?: T | undefined) => T extends null ? RadioGroupItemContext | null : RadioGroupItemContext, provideRadiogroupItemContext: (contextValue: RadioGroupItemContext) => RadioGroupItemContext;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<RadioGroupItemProps>, {
    disabled: boolean;
    as: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<RadioGroupItemProps>, {
    disabled: boolean;
    as: string;
}>>>, {
    disabled: boolean;
    as: import('../Primitive').AsTag | import("vue").Component;
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
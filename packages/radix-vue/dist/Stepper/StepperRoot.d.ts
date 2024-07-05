import type { Ref } from 'vue';
import type { DataOrientation, Direction } from '../shared/types';
import type { PrimitiveProps } from '../Primitive';
export interface StepperRootContext {
    modelValue: Ref<number | undefined>;
    changeModelValue: (value: number) => void;
    orientation: Ref<DataOrientation>;
    dir: Ref<Direction>;
    linear: Ref<boolean>;
    stepperItems: Ref<Set<HTMLElement>>;
    totalStepperItems: Ref<Set<HTMLElement>>;
}
export interface StepperRootProps extends PrimitiveProps {
    /**
     * The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs
     */
    defaultValue?: number;
    /**
     * The orientation the tabs are laid out.
     * Mainly so arrow navigation is done accordingly (left & right vs. up & down)
     * @defaultValue horizontal
     */
    orientation?: DataOrientation;
    /**
     * The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode.
     */
    dir?: Direction;
    /** The controlled value of the tab to activate. Can be bound as `v-model`. */
    modelValue?: number;
    /** Whether or not the steps must be completed in order */
    linear?: boolean;
}
export type StepperRootEmits = {
    /** Event handler called when the value changes */
    'update:modelValue': [payload: number | undefined];
};
export declare const injectStepperRootContext: <T extends StepperRootContext | null | undefined = StepperRootContext>(fallback?: T | undefined) => T extends null ? StepperRootContext | null : StepperRootContext, provideStepperRootContext: (contextValue: StepperRootContext) => StepperRootContext;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<StepperRootProps>, {
    orientation: string;
    linear: boolean;
    defaultValue: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (payload: number | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<StepperRootProps>, {
    orientation: string;
    linear: boolean;
    defaultValue: number;
}>>> & {
    "onUpdate:modelValue"?: ((payload: number | undefined) => any) | undefined;
}, {
    defaultValue: number;
    orientation: DataOrientation;
    linear: boolean;
}, {}>, Readonly<{
    default: (props: {
        /** Current step */
        modelValue: number | undefined;
    }) => any;
}> & {
    default: (props: {
        /** Current step */
        modelValue: number | undefined;
    }) => any;
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
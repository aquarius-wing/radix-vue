import type { PrimitiveProps } from '../Primitive';
import type { ImageLoadingStatus } from './utils';
export type AvatarImageEmits = {
    /**
     * A callback providing information about the loading status of the image. <br>
     * This is useful in case you want to control more precisely what to render as the image is loading.
     */
    loadingStatusChange: [value: ImageLoadingStatus];
};
export interface AvatarImageProps extends PrimitiveProps {
    src: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AvatarImageProps>, {
    as: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    loadingStatusChange: (value: ImageLoadingStatus) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AvatarImageProps>, {
    as: string;
}>>> & {
    onLoadingStatusChange?: ((value: ImageLoadingStatus) => any) | undefined;
}, {
    as: import('../Primitive/Primitive').AsTag | import("vue").Component;
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
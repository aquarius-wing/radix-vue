import { type PrimitiveProps } from '../Primitive';
import { type EventHook } from '@vueuse/core';
import { type Ref } from 'vue';
import { useSelectionBehavior } from '../shared';
import type { Direction } from '../shared/types';
export interface TreeRootProps<T = Record<string, any>, U extends Record<string, any> = Record<string, any>> extends PrimitiveProps {
    /** The controlled value of the tree. Can be binded-with with `v-model`. */
    modelValue?: U | U[];
    /** The value of the tree when initially rendered. Use when you do not need to control the state of the tree */
    defaultValue?: U | U[];
    /** List of items */
    items?: T[];
    /** The controlled value of the expanded item. Can be binded-with with `v-model`. */
    expanded?: string[];
    /** The value of the expanded tree when initially rendered. Use when you do not need to control the state of the expanded tree */
    defaultExpanded?: string[];
    /** This function is passed the index of each item and should return a unique key for that item */
    getKey: (val: T) => string;
    /** How multiple selection should behave in the collection. */
    selectionBehavior?: 'toggle' | 'replace';
    /** Whether multiple options can be selected or not.  */
    multiple?: boolean;
    /** The reading direction of the listbox when applicable. <br> If omitted, inherits globally from `DirectionProvider` or assumes LTR (left-to-right) reading mode. */
    dir?: Direction;
    /** When `true`, prevents the user from interacting with tree  */
    disabled?: boolean;
    /** When `true`, selecting parent will select the descendants. */
    propagateSelect?: boolean;
}
export type TreeRootEmits<T = Record<string, any>> = {
    'update:modelValue': [val: T];
    'update:expanded': [val: string[]];
};
interface TreeRootContext<T = Record<string, any>> {
    modelValue: Ref<T | T[]>;
    selectedKeys: Ref<string[]>;
    onSelect: (val: T) => void;
    expanded: Ref<string[]>;
    onToggle: (val: T) => void;
    items: Ref<T[]>;
    expandedItems: Ref<T[]>;
    getKey: (val: T) => string;
    multiple: Ref<boolean>;
    disabled: Ref<boolean>;
    dir: Ref<Direction>;
    propagateSelect: Ref<boolean>;
    isVirtual: Ref<boolean>;
    virtualKeydownHook: EventHook<KeyboardEvent>;
    handleMultipleReplace: ReturnType<typeof useSelectionBehavior>['handleMultipleReplace'];
}
export type FlattenedItem<T> = {
    _id: string;
    index: number;
    value: T;
    level: number;
    hasChildren: boolean;
    parentItem?: T;
    bind: {
        value: T;
        level: number;
        [key: string]: any;
    };
};
export declare const injectTreeRootContext: <T extends TreeRootContext<any> | null | undefined = TreeRootContext<any>>(fallback?: T | undefined) => T extends null ? TreeRootContext<any> | null : TreeRootContext<any>, provideTreeRootContext: (contextValue: TreeRootContext<any>) => TreeRootContext<any>;
declare const _default: <T extends Record<string, any>, U extends Record<string, any>>(__VLS_props: {
    defaultValue?: U | U[] | undefined;
    dir?: Direction | undefined;
    disabled?: boolean | undefined;
    multiple?: boolean | undefined;
    selectionBehavior?: "replace" | "toggle" | undefined;
    asChild?: boolean | undefined;
    as?: import('../Primitive').AsTag | import("vue").Component | undefined;
    expanded?: string[] | undefined;
    items?: T[] | undefined;
    getKey: (val: T) => string;
    modelValue?: U | U[] | undefined;
    "onUpdate:modelValue"?: ((val: U) => any) | undefined;
    defaultExpanded?: string[] | undefined;
    propagateSelect?: boolean | undefined;
    "onUpdate:expanded"?: ((val: string[]) => any) | undefined;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    slots: Readonly<{
        default: (props: {
            flattenItems: FlattenedItem<T>[];
            modelValue: U | U[];
            expanded: string[];
        }) => any;
    }> & {
        default: (props: {
            flattenItems: FlattenedItem<T>[];
            modelValue: U | U[];
            expanded: string[];
        }) => any;
    };
    attrs: any;
    emit: ((evt: "update:modelValue", val: U) => void) & ((evt: "update:expanded", val: string[]) => void);
} | undefined, __VLS_expose?: ((exposed: import('vue').ShallowUnwrapRef<{}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        defaultValue?: U | U[] | undefined;
        dir?: Direction | undefined;
        disabled?: boolean | undefined;
        multiple?: boolean | undefined;
        selectionBehavior?: "replace" | "toggle" | undefined;
        asChild?: boolean | undefined;
        as?: import('../Primitive').AsTag | import("vue").Component | undefined;
        expanded?: string[] | undefined;
        items?: T[] | undefined;
        getKey: (val: T) => string;
        modelValue?: U | U[] | undefined;
        "onUpdate:modelValue"?: ((val: U) => any) | undefined;
        defaultExpanded?: string[] | undefined;
        propagateSelect?: boolean | undefined;
        "onUpdate:expanded"?: ((val: string[]) => any) | undefined;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: Readonly<{
        default: (props: {
            flattenItems: FlattenedItem<T>[];
            modelValue: U | U[];
            expanded: string[];
        }) => any;
    }> & {
        default: (props: {
            flattenItems: FlattenedItem<T>[];
            modelValue: U | U[];
            expanded: string[];
        }) => any;
    };
    emit: ((evt: "update:modelValue", val: U) => void) & ((evt: "update:expanded", val: string[]) => void);
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            defaultValue?: U | U[] | undefined;
            dir?: Direction | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            selectionBehavior?: "replace" | "toggle" | undefined;
            asChild?: boolean | undefined;
            as?: import('../Primitive').AsTag | import("vue").Component | undefined;
            expanded?: string[] | undefined;
            items?: T[] | undefined;
            getKey: (val: T) => string;
            modelValue?: U | U[] | undefined;
            "onUpdate:modelValue"?: ((val: U) => any) | undefined;
            defaultExpanded?: string[] | undefined;
            propagateSelect?: boolean | undefined;
            "onUpdate:expanded"?: ((val: string[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: Readonly<{
            default: (props: {
                flattenItems: FlattenedItem<T>[];
                modelValue: U | U[];
                expanded: string[];
            }) => any;
        }> & {
            default: (props: {
                flattenItems: FlattenedItem<T>[];
                modelValue: U | U[];
                expanded: string[];
            }) => any;
        };
        emit: ((evt: "update:modelValue", val: U) => void) & ((evt: "update:expanded", val: string[]) => void);
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
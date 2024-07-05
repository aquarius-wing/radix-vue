import { type PrimitiveProps } from '../Primitive';
export interface TreeItemProps<T> extends PrimitiveProps {
    /** Value given to this item */
    value: T;
    /** Level of depth */
    level: number;
}
export type SelectEvent<T> = CustomEvent<{
    originalEvent: PointerEvent | KeyboardEvent;
    value?: T;
    isExpanded: boolean;
    isSelected: boolean;
}>;
export type ToggleEvent<T> = CustomEvent<{
    originalEvent: PointerEvent | KeyboardEvent;
    value?: T;
    isExpanded: boolean;
    isSelected: boolean;
}>;
export type TreeItemEmits<T> = {
    /** Event handler called when the selecting item. <br> It can be prevented by calling `event.preventDefault`. */
    select: [event: SelectEvent<T>];
    /** Event handler called when the selecting item. <br> It can be prevented by calling `event.preventDefault`. */
    toggle: [event: ToggleEvent<T>];
};
declare const _default: <T extends Record<string, any>>(__VLS_props: {
    value: T;
    onSelect?: ((event: SelectEvent<T>) => any) | undefined;
    onToggle?: ((event: ToggleEvent<T>) => any) | undefined;
    asChild?: boolean | undefined;
    as?: import('../Primitive').AsTag | import("vue").Component | undefined;
    level: number;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    slots: Readonly<{
        default: (props: {
            isExpanded: boolean;
            isSelected: boolean;
            isIndeterminate: boolean | undefined;
            handleToggle: () => void;
            handleSelect: () => void;
        }) => any;
    }> & {
        default: (props: {
            isExpanded: boolean;
            isSelected: boolean;
            isIndeterminate: boolean | undefined;
            handleToggle: () => void;
            handleSelect: () => void;
        }) => any;
    };
    attrs: any;
    emit: ((evt: "select", event: SelectEvent<T>) => void) & ((evt: "toggle", event: ToggleEvent<T>) => void);
} | undefined, __VLS_expose?: ((exposed: import("vue").ShallowUnwrapRef<{
    isExpanded: import("vue").ComputedRef<boolean>;
    isSelected: import("vue").ComputedRef<boolean>;
    isIndeterminate: import("vue").ComputedRef<boolean | undefined>;
    handleToggle: () => void;
    handleSelect: () => void;
}>) => void) | undefined, __VLS_setup?: Promise<{
    props: {
        value: T;
        onSelect?: ((event: SelectEvent<T>) => any) | undefined;
        onToggle?: ((event: ToggleEvent<T>) => any) | undefined;
        asChild?: boolean | undefined;
        as?: import('../Primitive').AsTag | import("vue").Component | undefined;
        level: number;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        isExpanded: import("vue").ComputedRef<boolean>;
        isSelected: import("vue").ComputedRef<boolean>;
        isIndeterminate: import("vue").ComputedRef<boolean | undefined>;
        handleToggle: () => void;
        handleSelect: () => void;
    }>): void;
    attrs: any;
    slots: Readonly<{
        default: (props: {
            isExpanded: boolean;
            isSelected: boolean;
            isIndeterminate: boolean | undefined;
            handleToggle: () => void;
            handleSelect: () => void;
        }) => any;
    }> & {
        default: (props: {
            isExpanded: boolean;
            isSelected: boolean;
            isIndeterminate: boolean | undefined;
            handleToggle: () => void;
            handleSelect: () => void;
        }) => any;
    };
    emit: ((evt: "select", event: SelectEvent<T>) => void) & ((evt: "toggle", event: ToggleEvent<T>) => void);
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            value: T;
            onSelect?: ((event: SelectEvent<T>) => any) | undefined;
            onToggle?: ((event: ToggleEvent<T>) => any) | undefined;
            asChild?: boolean | undefined;
            as?: import('../Primitive').AsTag | import("vue").Component | undefined;
            level: number;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import("vue").ShallowUnwrapRef<{
            isExpanded: import("vue").ComputedRef<boolean>;
            isSelected: import("vue").ComputedRef<boolean>;
            isIndeterminate: import("vue").ComputedRef<boolean | undefined>;
            handleToggle: () => void;
            handleSelect: () => void;
        }>): void;
        attrs: any;
        slots: Readonly<{
            default: (props: {
                isExpanded: boolean;
                isSelected: boolean;
                isIndeterminate: boolean | undefined;
                handleToggle: () => void;
                handleSelect: () => void;
            }) => any;
        }> & {
            default: (props: {
                isExpanded: boolean;
                isSelected: boolean;
                isIndeterminate: boolean | undefined;
                handleToggle: () => void;
                handleSelect: () => void;
            }) => any;
        };
        emit: ((evt: "select", event: SelectEvent<T>) => void) & ((evt: "toggle", event: ToggleEvent<T>) => void);
    } | undefined;
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
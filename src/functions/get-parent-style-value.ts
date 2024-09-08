import type ThemeColorType from '../@types/theme-color'
import type VariantType from '../@types/variant'
import type { CSSProperties } from 'react'

export default function getParentStyleValue(
    variant: VariantType,
    color: ThemeColorType,
): CSSProperties {
    const textColor = getTextColor(variant, color)

    if (variant === 'solid') {
        return {
            ...BASE_STYLE,
            color: textColor,

            // .bg-{color}
            backgroundColor: `hsl(var(--nextui-${color}))`,
        }
    }

    if (variant === 'bordered')
        return {
            ...BASE_STYLE,
            color: textColor,

            // .border-2
            borderWidth: 2,

            // .border-danger
            '--tw-border-opacity': 1,
            borderColor: `hsl(var(--nextui-${color}) / var(--nextui-${color}-opacity, var(--tw-border-opacity)))`,
        } as CSSProperties

    return {
        ...BASE_STYLE,
        color: textColor,

        // .bg-{color}/15
        backgroundColor: `hsl(var(--nextui-${color}) / 0.15)`,
    }
}

function getTextColor(variant: VariantType, color: ThemeColorType) {
    if (variant === 'solid') return '#fff' // .text-white

    // .text-{color}-800
    return `hsl(var(--nextui-${color}-800) / var(--nextui-${color}-800-opacity, var(--tw-text-opacity)))`
}

const BASE_STYLE: CSSProperties = {
    // .py-3\.5 {
    paddingTop: '0.875rem',
    paddingBottom: '0.875rem',
    // }

    // .px-4 {
    paddingLeft: '1rem',
    paddingRight: '1rem',
    // }

    flexDirection: 'row',
    // .gap-2\.5 {
    gap: '0.625rem',
    // }
}

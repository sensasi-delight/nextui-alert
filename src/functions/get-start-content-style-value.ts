import type ThemeColorType from '../@types/theme-color'
import type VariantType from '../@types/variant'
import type { CSSProperties } from 'react'

export default function getStartContentStyleValue(
    variant: VariantType,
    color: ThemeColorType,
): CSSProperties {
    if (variant === 'solid') return {}

    return {
        color: `hsl(var(--nextui-${color}) / var(--nextui-${color}-opacity, var(--tw-text-opacity)))`,
    }
}

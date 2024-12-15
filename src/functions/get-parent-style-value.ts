import type ThemeColorType from '../@types/theme-color'
import type VariantType from '../@types/variant'
import type { CSSProperties } from 'react'

/**
 * Get parent style value for the alert
 */
export default function getParentStyleValue(
    variant: VariantType,
    color: ThemeColorType,
): CSSProperties {
    const styles = {
        ...BASE_STYLE,
        color: getTextColor(variant, color),
        backgroundColor: getBgColor(variant, color),
    }

    if (variant === 'bordered') {
        // .border-2
        styles.borderWidth = 2

        // .border-danger
        // @ts-expect-error --tw-border-opacity
        styles['--tw-border-opacity'] = 1
        styles.borderColor = `hsl(var(--nextui-${color}) / var(--nextui-${color}-opacity, var(--tw-border-opacity)))`
    }

    return styles
}

/**
 * Get text color for the alert
 */
function getTextColor(
    variant: VariantType,
    color: ThemeColorType,
): CSSProperties['color'] {
    if (variant === 'solid') return '#fff' // .text-white

    // .text-{color}-800
    return `hsl(var(--nextui-${color}-800) / var(--nextui-${color}-800-opacity, var(--tw-text-opacity)))`
}

/**
 * Get background color for the alert
 */
function getBgColor(
    variant: VariantType,
    color: ThemeColorType,
): CSSProperties['backgroundColor'] {
    if (variant === 'solid') return `hsl(var(--nextui-${color}))`
    if (variant === 'bordered') return 'hsl(var(--nextui-background)))'

    // default variant `flat`
    return `color-mix(in srgb, hsl(var(--nextui-${color})) 15%, hsl(var(--nextui-background)))`
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

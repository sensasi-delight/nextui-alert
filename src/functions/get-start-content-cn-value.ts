import ThemeColorType from '../@types/theme-color'

export function getStartContentCnValue(color: ThemeColorType) {
    switch (color) {
        case 'primary':
            return 'text-primary'
        case 'secondary':
            return 'text-secondary'
        case 'success':
            return 'text-success'
        case 'warning':
            return 'text-warning'
        case 'danger':
            return 'text-danger'
    }
}

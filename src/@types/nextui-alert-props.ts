import type { ButtonProps } from '@nextui-org/button'
import type { CardProps } from '@nextui-org/card'
import type { ReactNode } from 'react'
import type VariantType from './variant'
import type SeverityType from './severity'
import type ThemeColorType from './theme-color'

/**
 * The base props of the NextuiAlert component.
 */
interface AlertBaseProps extends CardProps {
    /**
     * The content at the start of the alert.
     */
    startContent?: ReactNode | false

    /**
     * The severity of the alert
     *
     * @default 'warning'
     */
    severity?: SeverityType

    /**
     * The variant of the alert
     *
     * @default 'flat'
     */
    variant?: VariantType

    /**
     * The color of the alert
     */
    color?: ThemeColorType

    /**
     * Additional title of the alert
     */
    title?: string

    /**
     * The content at the end of the alert.
     */
    endContent?: ReactNode

    /**
     * The handler to be called when the alert is closed.
     */
    onClose?: ButtonProps['onPress']
}

/**
 * The props of the NextuiAlert component.
 *
 * @see https://github.com/sensasi-delight/nextui-alert/blob/main/src/@types/nextui-alert-props.ts
 */
type NextuiAlertProps = AlertBaseProps &
    (
        | {
              endContent?: ReactNode
              onClose?: never
          }
        | {
              endContent?: never
              onClose?: ButtonProps['onPress']
          }
    )

export default NextuiAlertProps

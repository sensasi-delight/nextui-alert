import type NextuiAlertProps from './@types/nextui-alert-props'

import { XIcon } from 'lucide-react'
import { Button } from '@nextui-org/button'
import { Card } from '@nextui-org/card'

import getDefaultStartContent from './functions/get-default-start-content'
import getParentStyleValue from './functions/get-parent-style-value'

/**
 * The NextuiAlert component.
 *
 * @see https://github.com/sensasi-delight/nextui-alert
 */
export default function NextuiAlert(props: NextuiAlertProps) {
    const {
        children,
        color: _color,
        endContent,
        onClose,
        variant = 'flat',
        severity = 'warning',
        startContent: _startContent,
        title,
        ...restProps
    } = props

    const color = _color ?? (severity === 'info' ? 'primary' : severity)

    const startContent =
        _startContent === false
            ? undefined
            : (_startContent ?? getDefaultStartContent(severity))

    return (
        <Card style={getParentStyleValue(variant, color)} {...restProps}>
            {startContent && (
                <div className={variant === 'solid' ? '' : `text-${color}`}>
                    {startContent}
                </div>
            )}

            <div className="flex-1 place-content-center">
                {title && (
                    <div className="text-lg font-medium mb-1.5">{title}</div>
                )}

                {children}
            </div>

            {onClose && (
                <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-inherit rounded-full min-w-5 min-h-5 w-5 h-5"
                    onPress={onClose}>
                    <XIcon />
                </Button>
            )}

            {endContent}
        </Card>
    )
}

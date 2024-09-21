import type NextuiAlertProps from './@types/nextui-alert-props'

import { XIcon } from 'lucide-react'
import { Button } from '@nextui-org/button'
import { Card } from '@nextui-org/card'

import getDefaultStartContent from './functions/get-default-start-content'
import getParentStyleValue from './functions/get-parent-style-value'
import { getStartContentCnValue } from './functions/get-start-content-cn-value'

export default function NextuiAlert({
    severity = 'warning',
    variant = 'flat',
    shadow = 'none',
    color: _color,
    startContent: _startContent,
    title,
    children,
    onClose,
    endContent,
    ...restProps
}: NextuiAlertProps) {
    const color = _color ?? (severity === 'info' ? 'primary' : severity)

    const startContent =
        _startContent === false
            ? undefined
            : (_startContent ?? getDefaultStartContent(severity))

    return (
        <Card
            shadow={shadow}
            style={getParentStyleValue(variant, color)}
            {...restProps}>
            {startContent && (
                <div
                    className={
                        variant === 'solid' ? '' : getStartContentCnValue(color)
                    }>
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
                    onClick={onClose}>
                    <XIcon />
                </Button>
            )}

            {endContent}
        </Card>
    )
}

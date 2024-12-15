import type SeverityType from '../@types/severity'
import {
    AlertCircleIcon,
    CheckCircleIcon,
    InfoIcon,
    TriangleAlertIcon,
} from 'lucide-react'

/**
 * Get default start content for the alert
 */
export default function getDefaultStartContent(severity: SeverityType) {
    if (severity === 'success') return <CheckCircleIcon />
    if (severity === 'info') return <InfoIcon />
    if (severity === 'danger') return <AlertCircleIcon />

    return <TriangleAlertIcon />
}

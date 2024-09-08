import type SeverityType from '../@types/severity'
import {
    AlertCircleIcon,
    CheckCircleIcon,
    InfoIcon,
    TriangleAlertIcon,
} from 'lucide-react'

export default function getDefaultStartContent(severity: SeverityType) {
    if (severity === 'success') return <CheckCircleIcon />
    if (severity === 'info') return <InfoIcon />
    if (severity === 'danger') return <AlertCircleIcon />

    return <TriangleAlertIcon />
}

import { ReactNode } from 'react';
import { ButtonProps } from '@nextui-org/button';
import { CardProps } from '@nextui-org/card';
import SeverityType from './severity';
import ThemeColorType from './theme-color';
import VariantType from './variant';
interface WithEndContent {
    endContent?: ReactNode;
    onClose?: never;
}
interface WithOnClose {
    endContent?: never;
    onClose?: ButtonProps['onClick'];
}
interface AlertBaseProps {
    startContent?: ReactNode | false;
    severity?: SeverityType;
    variant?: VariantType;
    color?: ThemeColorType;
    title?: string;
    children: ReactNode;
}
type NextuiAlertProps = AlertBaseProps & (WithEndContent | WithOnClose) & Omit<CardProps, 'children' | 'classNames'>;
export default NextuiAlertProps;

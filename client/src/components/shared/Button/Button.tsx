import clsx from 'clsx';

import styles from './button.module.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return (
        <button
            type="button"
            className={clsx(styles['storybook-button'], styles[mode], styles[`storybook-button--${size}`])}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};

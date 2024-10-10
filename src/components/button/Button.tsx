'use client';
import { ButtonHTMLAttributes, FC, ReactNode, memo, useMemo } from 'react';

import Link, { LinkProps } from 'next/link';

import { XOR } from '@types';
import { clx } from '@utils';

type size = 'sm' | 'md' | 'lg';

type Variant = 'primary' | 'empty';

const variants: Record<Variant, string> = {
  primary: 'px-5 text-gray-200 bg-primary',
  empty: '!p-0',
};

const sizes: Record<size, string> = {
  sm: 'text-xs h-8',
  md: 'text-sm h-10',
  lg: 'text-lg h-11',
};

export interface ButtonBaseProps {
  variant?: Variant;
  size?: size;
  className?: string;
}

export type TButtonProps = {
  tag?: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type TLinkProps = {
  tag: 'a';
} & LinkProps;

export type ButtonProps = XOR<{ children: ReactNode }, { label: string }> &
  ButtonBaseProps &
  (TButtonProps | TLinkProps);

export const Button: FC<ButtonProps> = memo(
  ({ variant = 'primary', className, label, size = 'md', ...props }) => {
    const baseClass = useMemo(
      () =>
        clx(
          'flex place-items-center text-center select-none rounded-md relative group overflow-hidden h-full transition-all duration-300',
          variants[variant],
          className,
        ),
      [className, variant],
    );

    if (props.tag === 'a') {
      const { ...rest } = props;
      return (
        <Link
          className={clx('relative', sizes[size])}
          aria-label={label}
          {...rest}>
          <span className={baseClass}>{label ?? props.children}</span>
        </Link>
      );
    }

    const { ...rest } = props;
    const buttonClass = clx(
      baseClass,
      rest.disabled && 'cursor-not-allowed opacity-70 pointer-events-none',
      className,
    );

    return (
      <button
        type="button"
        className={clx('relative', buttonClass, sizes[size])}
        aria-label={label}
        disabled={rest.disabled}
        aria-disabled={rest.disabled}
        {...rest}>
        {label ?? props.children}
      </button>
    );
  },
);

Button.displayName = 'Button';

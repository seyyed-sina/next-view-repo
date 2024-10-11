'use client';
import { ButtonHTMLAttributes, FC, memo, PropsWithChildren } from 'react';

import { useFormStatus } from 'react-dom';

import { Button, ButtonBaseProps, LoadingSpinner } from '@components';
import { clx } from '@utils';

type Props = {
  spinnerFill?: string;
  isSubmitting?: boolean;
  className?: string;
} & PropsWithChildren &
  ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton: FC<Props> = memo(
  ({ children, spinnerFill, className, ...props }) => {
    const { pending } = useFormStatus();
    const isSubmitting = pending || props.isSubmitting;

    return (
      <Button
        type={props.type ?? 'submit'}
        disabled={props.disabled || isSubmitting}
        className={clx('relative overflow-hidden', className)}
        {...props}>
        <span className={clx('flex items-center', isSubmitting && 'opacity-0')}>
          {children}
        </span>
        {isSubmitting && (
          <span className="absolute inset-0 m-auto flex justify-center items-center text-center">
            <LoadingSpinner size={24} fill={spinnerFill ?? '#fff'} />
          </span>
        )}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';

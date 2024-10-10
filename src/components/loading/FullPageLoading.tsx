import { FC, ReactNode } from 'react';

import { LoadingContent, LoadingSpinnerProps } from '@components';
import { clx } from '@utils';

interface Props extends LoadingSpinnerProps {
  title?: ReactNode;
  className?: string;
}

export const FullPageLoading: FC<Props> = ({ className, title, ...props }) => {
  return (
    <LoadingContent
      title={title}
      className={clx(
        'bg-white text-black dark:text-white dark:bg-black size-full fixed inset-0 z-20',
        className,
      )}
      {...props}
    />
  );
};

FullPageLoading.displayName = 'FullPageLoading';

import React from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white hover:bg-blue-600 ring-blue-500',
        outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 ring-blue-500',
        ghost: 'text-blue-500 hover:bg-blue-50',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export function Button({ children, className, variant, size, ...props }) {
  return (
    <button className={clsx(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}

export default Button;

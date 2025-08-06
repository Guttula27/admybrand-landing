import React from 'react';
import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl bg-white dark:bg-dark shadow-md p-6 border border-gray-100 dark:border-gray-800 transition-all',
        className
      )}
    >
      {children}
    </div>
  );
}

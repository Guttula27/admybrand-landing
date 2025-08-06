import React from 'react';
import clsx from 'clsx';

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx('px-4 md:px-8 lg:px-16 py-16 w-full scroll-mt-24', className)}
    >
      {children}
    </section>
  );
}

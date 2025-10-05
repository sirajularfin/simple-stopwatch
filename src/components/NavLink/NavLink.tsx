'use client';

import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import { useSelectedLayoutSegment } from 'next/navigation';
import classes from './style.module.scss';

interface Props {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}

export default function NavLink({ href, children, exact = false }: Props) {
  const activeSegment = useSelectedLayoutSegment();
  const isActive = activeSegment === href; // e.g., "timer"

  return (
    <Link
      href={href}
      className={classNames(classes.link, { [classes.active]: isActive })}
      aria-current={isActive ? 'page' : undefined}
      prefetch
    >
      {children}
    </Link>
  );
}

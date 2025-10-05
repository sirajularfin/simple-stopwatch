import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

import classes from './style.module.scss';

type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLDataListElement> &
  React.HTMLAttributes<HTMLSpanElement> &
  React.HTMLAttributes<HTMLHeadingElement> & {
    variant:
      | 'displayLarge'
      | 'displaySmall'
      | 'headingLarge'
      | 'headingMedium'
      | 'headingSmall'
      | 'bodyLarge'
      | 'bodyMedium'
      | 'bodySmall'
      | 'labelLarge'
      | 'labelMedium'
      | 'labelSmall'
      | 'listItem';
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
    align?: 'left' | 'center' | 'right' | 'justify';
  };

const Typography: React.FC<PropsWithChildren<TextProps>> = ({
  as = 'p',
  children,
  className = '',
  align,
  ...props
}) => {
  let Component = as;
  switch (props.variant) {
    case 'displayLarge':
      Component = 'p';
      className += ' ' + classes.displayLarge;
      break;
    case 'displaySmall':
      Component = 'p';
      className += ' ' + classes.displaySmall;
      break;
    case 'headingLarge':
      Component = 'h1';
      className += ' ' + classes.headingLarge;
      break;
    case 'headingMedium':
      Component = 'h2';
      className += ' ' + classes.headingMedium;
      break;
    case 'headingSmall':
      Component = 'h3';
      className += ' ' + classes.headingSmall;
      break;
    case 'bodyLarge':
      Component = 'p';
      className += ' ' + classes.bodyLarge;
      break;
    case 'bodyMedium':
      Component = 'p';
      className += ' ' + classes.bodyMedium;
      break;
    case 'bodySmall':
      Component = 'p';
      className += ' ' + classes.bodySmall;
      break;
    case 'labelLarge':
      Component = 'p';
      className += ' ' + classes.labelLarge;
      break;
    case 'labelMedium':
      Component = 'p';
      className += ' ' + classes.labelMedium;
      break;
    case 'labelSmall':
      Component = 'p';
      className += ' ' + classes.labelSmall;
      break;
    case 'listItem':
      Component = 'li';
      className += ' ' + classes.listItem;
      break;
    default:
      Component = as;
  }

  return (
    <Component
      className={classNames(className, classes.commonStyle)}
      onClick={props.onClick}
      style={{ textAlign: align }}
    >
      {children}
    </Component>
  );
};

export default Typography;

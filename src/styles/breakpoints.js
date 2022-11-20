import { em } from './utils';

export const VIEWPORTS = {
  XS: 480,
  S: 640,
  M: 768,
  L: 1024,
  XL: 1440,
};

export const breakpoints = {
  XS: `(min-width: ${em(VIEWPORTS.XS)})`,
  S: `(min-width: ${em(VIEWPORTS.S)})`,
  M: `(min-width: ${em(VIEWPORTS.M)})`,
  L: `(min-width: ${em(VIEWPORTS.L)})`,
  XL: `(min-width: ${em(VIEWPORTS.XL)})`,
};

const mediaQuery = (breakpoint, contents) => {
  let bp = null;

  switch (breakpoint) {
    case 'xs':
    case 'XS':
      bp = breakpoints.XS;
      break;
    case 's':
    case 'S':
      bp = breakpoints.S;
      break;
    case 'm':
    case 'md':
    case 'M':
    case 'MD':
      bp = breakpoints.M;
      break;
    case 'l':
    case 'L':
    case 'lg':
    case 'LG':
      bp = breakpoints.L;
      break;
    case 'xl':
    case 'XL':
      bp = breakpoints.XL;
      break;
  }

  if (!bp) {
    return null;
  }

  return `@media ${bp} {
    ${contents}
  }`;
};

export const mq = mediaQuery;

mq.xs = (contents) => mq('xs', contents);
mq.s = (contents) => mq('s', contents);
mq.m = (contents) => mq('m', contents);
mq.lg = (contents) => mq('lg', contents);
mq.xl = (contents) => mq('xl', contents);

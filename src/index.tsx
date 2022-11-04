import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reactLogo from './assets/react.svg';

console.log(reactLogo);

function getLibVersion(type: 'react' | 'react-dom'): string {
  return (type === 'react' ? React : ReactDOM).version;
}

console.log(getLibVersion('react'));

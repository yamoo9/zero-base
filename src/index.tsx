import * as React from 'react';
import * as ReactDOM from 'react-dom';

function getLibVersion(type: 'react' | 'react-dom'): string {
  console.log(<div>hey</div>);

  return (type === 'react' ? React : ReactDOM).version;
}

console.log(getLibVersion('react-dom'));

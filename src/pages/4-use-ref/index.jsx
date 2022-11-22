import { useState } from 'react';
import { Container } from '@/components';
import { LearnHook } from './components/LearnHook';

/* -------------------------------------------------------------------------- */

export default function Page() {
  const [count, setCount] = useState(101);
  return (
    <>
      <Container.Headline lang="en">useRef Hook</Container.Headline>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update count
      </button>
      <div>
        <output>{count}</output>
      </div>
      <LearnHook data={[count]} />
    </>
  );
}

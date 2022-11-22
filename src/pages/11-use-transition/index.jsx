/* eslint-disable no-unused-vars */

import { LearnHook, UsingTransitionHook } from './components/LearnHook';
import { Container } from '@/components';

/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <Container.Headline lang="en">useTransition Hook</Container.Headline>
      <LearnHook total={400} />
      {/* <UsingTransitionHook total={400} /> */}
    </>
  );
}

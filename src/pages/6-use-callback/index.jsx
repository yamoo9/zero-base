import { Container } from '@/components';
import { LearnHook } from './components/LearnHook';

/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <Container.Headline lang="en">useCallback Hook</Container.Headline>
      <LearnHook />
    </>
  );
}

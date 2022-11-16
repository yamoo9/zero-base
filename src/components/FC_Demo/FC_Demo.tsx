import { withFetch } from '../../hoc/withFetch';

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export const FC_Demo = withFetch<Post>(function FunctionComponent({
  fetchState,
  children,
}) {
  return (
    <div>
      <h2>{fetchState.data?.title}</h2>
      {children}
    </div>
  );
});

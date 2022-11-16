import React from 'react';
import { withFetch, type State as FetchStateType } from '../../hoc/withFetch';

type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export const CC_Demo = withFetch<Post>(
  class ClassComponent extends React.Component<{
    fetchState: FetchStateType<Post>;
    children?: React.ReactNode;
  }> {
    render() {
      const { fetchState, children } = this.props;
      return (
        <div>
          <h2>{fetchState.data?.title}</h2>
          {children}
        </div>
      );
    }
  }
);

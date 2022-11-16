import React from 'react';

interface Props {
  endpoint: RequestInfo | URL;
  children?: React.ReactNode;
}

export type State<T> = {
  loading: boolean;
  error: Error | null;
  data: T | null;
};

export function withFetch<T>(
  Component:
    | React.FC<{
        fetchState: State<T>;
        children?: React.ReactNode | React.ReactNode[];
      }>
    | typeof React.Component
) {
  class WithFetchHOC extends React.Component<Props, State<T>> {
    state: State<T> = {
      loading: true,
      error: null,
      data: null,
    };

    render() {
      const { loading, error, data } = this.state;

      return (
        <Component fetchState={{ loading, error, data }}>
          {this.props.children}
        </Component>
      );
    }

    componentDidMount() {
      this.fetchData();
    }

    async fetchData() {
      try {
        const response = await fetch(this.props.endpoint);
        const json = await response.json();
        this.setState({
          loading: false,
          data: json,
        });
      } catch (error) {
        this.setState({
          loading: false,
          error: error as Error,
        });
      }
    }
  }

  return WithFetchHOC;
}
